import { memo, useState, useCallback, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// Set worker source - use unpkg for reliable CDN
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

// API Key from environment variable
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const GRADING_CRITERIA = [
  { id: 'background', name: '議題背景', weight: 15, icon: '📝', description: '市場現況說明清楚、有時事佐證' },
  { id: 'concepts', name: '衍生性商品理論應用', weight: 35, icon: '📚', description: '正確使用至少 2 章概念分析' },
  { id: 'charts', name: '實例計算與圖表', weight: 15, icon: '📊', description: '計算正確、圖表說明清楚' },
  { id: 'conclusion', name: '結論與投資啟示', weight: 15, icon: '💡', description: '有自己觀點、有投資建議' },
  { id: 'reflection', name: 'AI 使用反思', weight: 20, icon: '🤖', description: '說明工具使用、有批判思考' },
];

const GradeTab = memo(function GradeTab() {
  const [studentId, setStudentId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [pdfText, setPdfText] = useState('');
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGrading, setIsGrading] = useState(false);
  const [scores, setScores] = useState(null);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  // Check if student info is filled
  const isStudentInfoComplete = studentId.trim() !== '' && studentName.trim() !== '';

  // Generate grading prompt for derivatives course
  const generatePrompt = useCallback((text) => {
    return `你是一位大學財務金融系教授，專門教授「衍生性金融商品」課程，請根據以下評分標準評閱學生的期末報告。

## 課程範圍：
- ch01-06：期貨篇（期貨契約、避險、價格發現、結算）
- ch07-14：選擇權篇（選擇權基本概念、Black-Scholes、Greek Letters、交易策略）
- ch15：交換（利率交換、貨幣交換）
- ch16：結構型商品

## 評分標準（滿分 100 分）：
1. 議題背景（15%）：議題說明是否清楚？有無台灣衍生性金融商品市場的實際數據或新聞佐證？
2. 衍生性商品理論應用（35%）：是否正確使用至少 2 章課本概念分析議題？如期貨避險、選擇權定價、Greeks、交易策略等
3. 實例計算與圖表（15%）：是否有具體的數字計算範例（如避險計算、損益分析）？圖表說明是否清楚？
4. 結論與投資啟示（15%）：是否有自己的觀點？是否提出對投資人有意義的建議？
5. AI 使用反思（20%）：是否說明使用了哪些 AI 工具？有無批判性思考或發現 AI 錯誤？

## 請以 JSON 格式回覆，包含：
{
  "background": { "score": 0-15, "comment": "評語" },
  "concepts": { "score": 0-35, "comment": "評語" },
  "charts": { "score": 0-15, "comment": "評語" },
  "conclusion": { "score": 0-15, "comment": "評語" },
  "reflection": { "score": 0-20, "comment": "評語" },
  "total": 0-100,
  "overall": "整體評語與改進建議"
}

## 學生報告內容：
${text.substring(0, 15000)}`;
  }, []);

  // Grade with OpenAI GPT-4.1-mini API
  const gradeWithApi = useCallback(async (text) => {
    if (!OPENAI_API_KEY) {
      setError('系統設定錯誤：未設定 API Key，請聯繫管理員');
      return;
    }

    setIsGrading(true);
    setError('');

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4.1-mini',
          messages: [
            {
              role: 'system',
              content: '你是一位專業的大學財務金融系教授，負責評閱學生的衍生性金融商品期末報告。請嚴格按照評分標準給分，並提供具體的評語和改進建議。回覆必須是有效的 JSON 格式。'
            },
            {
              role: 'user',
              content: generatePrompt(text)
            }
          ],
          temperature: 0.3,
          max_tokens: 2048,
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message || 'API 錯誤');
      }

      const content = data.choices?.[0]?.message?.content || '';

      // Extract JSON from response
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const result = JSON.parse(jsonMatch[0]);
        setScores(result);
      } else {
        throw new Error('無法解析評分結果');
      }
    } catch (err) {
      setError(`評分失敗：${err.message}`);
      console.error(err);
    } finally {
      setIsGrading(false);
    }
  }, [generatePrompt]);

  // Extract text from PDF and auto-grade
  const extractTextFromPdf = useCallback(async (file) => {
    setIsLoading(true);
    setError('');
    setPdfText('');
    setScores(null);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let fullText = '';

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        fullText += pageText + '\n\n';
      }

      const extractedText = fullText.trim();
      setPdfText(extractedText);
      setFileName(file.name);
      setIsLoading(false);

      // Auto-grade after PDF extraction
      if (extractedText) {
        gradeWithApi(extractedText);
      }
    } catch (err) {
      setError('無法讀取 PDF 檔案，請確認檔案格式正確');
      console.error(err);
      setIsLoading(false);
    }
  }, [gradeWithApi]);

  // Handle file upload
  const handleFileChange = useCallback((e) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      extractTextFromPdf(file);
    } else if (file) {
      setError('請上傳 PDF 格式的檔案');
    }
  }, [extractTextFromPdf]);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Warning Banner */}
      <div className="bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-2xl p-5 border border-amber-500/50">
        <div className="flex items-start gap-3">
          <span className="text-3xl">⚠️</span>
          <div>
            <h3 className="font-bold text-amber-300 text-lg">重要提醒</h3>
            <p className="text-white/80 mt-1">
              此功能為 <strong>AI 嘗試評分</strong>，僅供參考，<strong>並非最終成績</strong>。
              最終分數以老師批改為準。AI 可能有誤判，請勿過度依賴。
            </p>
            <p className="text-white/80 mt-2 flex items-center gap-2">
              <span className="text-amber-300">📤</span>
              <span>完成報告後，請記得將 PDF 上傳至<strong className="text-amber-300">創課系統</strong>繳交！</span>
            </p>
          </div>
        </div>
      </div>

      {/* Student Info Section */}
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="text-3xl">👤</span> 填寫基本資料
        </h2>
        <p className="text-white/60 text-sm mb-6">
          請先填寫學號與姓名，才能上傳報告進行評分
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white/70 text-sm mb-2">學號 *</label>
            <input
              type="text"
              placeholder="例：D1234567"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-white/70 text-sm mb-2">姓名 *</label>
            <input
              type="text"
              placeholder="例：王小明"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
        </div>
        {isStudentInfoComplete && (
          <div className="mt-4 flex items-center gap-2 text-emerald-400">
            <span>✓</span>
            <span className="text-sm">資料填寫完成，可以上傳報告了</span>
          </div>
        )}
      </div>

      {/* Upload Section */}
      <div className={`bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 transition-opacity ${!isStudentInfoComplete ? 'opacity-50 pointer-events-none' : ''}`}>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="text-3xl">📄</span> 上傳報告 PDF
          {!isStudentInfoComplete && <span className="text-sm font-normal text-white/50">（請先填寫基本資料）</span>}
        </h2>

        <div
          onClick={() => isStudentInfoComplete && !isLoading && !isGrading && fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-10 text-center transition-all ${
            isStudentInfoComplete && !isLoading && !isGrading
              ? 'border-white/20 hover:border-purple-500/50 cursor-pointer hover:bg-white/5'
              : 'border-white/10 cursor-not-allowed'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
            disabled={!isStudentInfoComplete || isLoading || isGrading}
          />
          {isLoading ? (
            <div className="text-white/60">
              <div className="text-4xl mb-3 animate-spin">⏳</div>
              <p>讀取 PDF 中...</p>
            </div>
          ) : isGrading ? (
            <div className="text-purple-400">
              <div className="text-4xl mb-3 animate-pulse">🤖</div>
              <p className="font-bold">AI 評分中...</p>
              <p className="text-sm text-white/50 mt-1">請稍候，約需 10-20 秒</p>
            </div>
          ) : fileName ? (
            <div className="text-emerald-400">
              <div className="text-4xl mb-3">✅</div>
              <p className="font-bold">{fileName}</p>
              <p className="text-sm text-white/50 mt-1">點擊重新上傳</p>
            </div>
          ) : (
            <div className="text-white/60">
              <div className="text-4xl mb-3">📤</div>
              <p className="font-medium">點擊上傳 PDF 檔案</p>
              <p className="text-sm mt-1">上傳後將自動進行 AI 評分</p>
            </div>
          )}
        </div>

        {error && (
          <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300">
            {error}
          </div>
        )}
      </div>

      {/* Scores Display */}
      {scores && (
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          {/* Header with Total Score */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-3xl">📊</span> AI 評分結果
              </h2>
              <p className="text-white/60 text-sm mt-2">
                <span className="inline-block bg-white/10 px-3 py-1 rounded-lg mr-2">學號：{studentId}</span>
                <span className="inline-block bg-white/10 px-3 py-1 rounded-lg">姓名：{studentName}</span>
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {scores.total} 分
              </div>
              <p className="text-xs text-white/40 mt-1">滿分 100 分</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-300 text-sm flex items-start gap-3">
            <span className="text-xl">⚠️</span>
            <span>提醒：此為 AI 預估分數，僅供自我檢視參考，最終成績以老師評分為準。</span>
          </div>

          {/* Scores Table */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span>🎯</span> 各項評分明細
            </h3>

            {/* Table Header */}
            <div className="hidden md:grid md:grid-cols-12 gap-4 p-4 bg-white/10 rounded-t-xl text-sm font-bold text-white/80">
              <div className="col-span-4">評分項目</div>
              <div className="col-span-2 text-center">得分</div>
              <div className="col-span-6">評語</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-white/10 border border-white/10 md:border-t-0 rounded-xl md:rounded-t-none overflow-hidden">
              {GRADING_CRITERIA.map((criterion, index) => {
                const result = scores[criterion.id];
                if (!result) return null;
                const percentage = (result.score / criterion.weight) * 100;
                const scoreColor = percentage >= 80 ? 'text-emerald-400' :
                                   percentage >= 60 ? 'text-amber-400' : 'text-red-400';
                const bgColor = percentage >= 80 ? 'bg-emerald-500' :
                                percentage >= 60 ? 'bg-amber-500' : 'bg-red-500';

                return (
                  <div key={criterion.id} className={`p-4 ${index % 2 === 0 ? 'bg-white/5' : 'bg-white/[0.02]'}`}>
                    {/* Mobile Layout */}
                    <div className="md:hidden space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{criterion.icon}</span>
                          <span className="font-bold">{criterion.name}</span>
                          <span className="text-white/40 text-xs">({criterion.weight}%)</span>
                        </div>
                        <span className={`text-lg font-bold ${scoreColor}`}>
                          {result.score}/{criterion.weight}
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${bgColor}`} style={{ width: `${percentage}%` }} />
                      </div>
                      <p className="text-sm text-white/60">{result.comment}</p>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:grid md:grid-cols-12 gap-4 items-start">
                      <div className="col-span-4 flex items-center gap-3">
                        <span className="text-2xl">{criterion.icon}</span>
                        <div>
                          <span className="font-bold">{criterion.name}</span>
                          <span className="text-white/40 text-sm ml-2">({criterion.weight}%)</span>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mt-2 w-24">
                            <div className={`h-full rounded-full ${bgColor}`} style={{ width: `${percentage}%` }} />
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 text-center">
                        <span className={`text-xl font-bold ${scoreColor}`}>
                          {result.score}
                        </span>
                        <span className="text-white/40 text-sm">/{criterion.weight}</span>
                      </div>
                      <div className="col-span-6 text-sm text-white/70">
                        {result.comment}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Overall Comment */}
          {scores.overall && (
            <div className="mb-6 p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">💬</span> 整體評語與改進建議
              </h3>
              <div className="text-white/90 leading-relaxed whitespace-pre-line">
                {scores.overall}
              </div>
            </div>
          )}

          {/* Text Preview */}
          <details className="mb-6 group">
            <summary className="cursor-pointer text-white/60 hover:text-white transition-colors flex items-center gap-2 p-4 bg-white/5 rounded-xl hover:bg-white/10">
              <span>📖</span>
              <span>查看擷取的報告內容（前 2000 字）</span>
              <span className="ml-auto transform group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-2 p-4 bg-white/5 rounded-xl text-sm text-white/70 max-h-60 overflow-y-auto border border-white/10">
              <pre className="whitespace-pre-wrap font-sans">{pdfText.substring(0, 2000)}...</pre>
            </div>
          </details>

          {/* Final Reminder */}
          <div className="text-center p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-white/10">
            <p className="text-white/70 text-sm">
              🎓 記得根據 AI 建議修改後再繳交，並保持自己的觀點！
            </p>
            <p className="text-amber-300 text-sm mt-2 font-medium">
              📤 完成後請將 PDF 上傳至<strong>創課系統</strong>繳交
            </p>
          </div>
        </div>
      )}
    </div>
  );
});

export default GradeTab;
