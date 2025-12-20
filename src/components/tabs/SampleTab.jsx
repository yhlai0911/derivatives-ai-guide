import { memo } from 'react';

const SampleTab = memo(function SampleTab() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <span className="text-3xl">📖</span> 報告範例：台積電期貨避險策略分析
          </h2>
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
            ⭐ 優良範例
          </span>
        </div>

        {/* Sample Report Header */}
        <div className="bg-white/10 rounded-2xl p-6 mb-6 text-center">
          <h3 className="text-xl font-bold mb-2">台積電期貨避險策略之分析</h3>
          <p className="text-white/60">王小明｜財金系三年級｜學號：41012345</p>
          <p className="text-white/40 text-sm mt-1">衍生性金融商品期末報告｜2024 年 1 月</p>
        </div>

        {/* Section 1 */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-cyan-400">
            <span className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-sm">1</span>
            議題背景說明
            <span className="text-xs font-normal text-white/40 ml-2">佔 15%</span>
          </h3>
          <div className="bg-white/5 rounded-xl p-5 text-white/80 leading-relaxed space-y-3">
            <p>2024 年在 AI 浪潮推動下，台積電股價從年初 500 元一路飆漲，最高突破 1,000 元大關，成為全球市值前十大企業。然而，劇烈的股價波動也讓持有大量台積電現股的法人機構面臨龐大的<strong>價格風險</strong>。</p>
            <p>台灣期貨交易所推出的「台積電期貨」成為法人避險的重要工具。2024 年台積電期貨日均量突破 5 萬口，較去年成長超過 50%，顯示市場對避險需求大增。</p>
            <p>本報告將運用<strong>期貨避險原理</strong>（ch02）與<strong>股票期貨契約特性</strong>（ch03）分析法人如何運用台積電期貨進行避險操作。</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-purple-400">
            <span className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-sm">2</span>
            課本理論應用
            <span className="text-xs font-normal text-white/40 ml-2">佔 35%｜重點段落</span>
          </h3>
          <div className="bg-white/5 rounded-xl p-5 text-white/80 leading-relaxed space-y-4">
            <div>
              <h4 className="font-bold text-purple-300 mb-2">【期貨避險原理 - ch02】</h4>
              <p className="mb-2">根據課本 ch02，期貨的三大功能為：<strong>價格發現</strong>、<strong>避險</strong>、<strong>投機</strong>。其中避險是期貨最重要的功能。</p>
              <p className="mb-2"><strong>避險原理：</strong>在現貨市場與期貨市場建立相反的部位，使兩邊的損益相互抵銷。</p>
              <p className="mb-2">• <strong>多頭避險（Long Hedge）</strong>：未來需要買入現貨者，先買進期貨鎖定成本</p>
              <p>• <strong>空頭避險（Short Hedge）</strong>：持有現貨者，賣出期貨鎖定賣價</p>
            </div>
            <div>
              <h4 className="font-bold text-purple-300 mb-2">【股票期貨契約規格 - ch03】</h4>
              <p className="mb-2">台積電期貨的契約規格如下：</p>
              <p className="mb-2">• <strong>契約乘數</strong>：2,000 股（即 2 張股票）</p>
              <p className="mb-2">• <strong>最小跳動點</strong>：0.5 元，價值 1,000 元</p>
              <p className="mb-2">• <strong>原始保證金</strong>：約 167,000 元（依期交所公告調整）</p>
              <p>• <strong>結算方式</strong>：現金結算，以最後交易日收盤價結算</p>
            </div>
            <div>
              <h4 className="font-bold text-purple-300 mb-2">【避險比率計算 - ch04】</h4>
              <p className="mb-2">根據 ch04 期貨合理價格與避險策略，<strong>最適避險比率</strong>的計算公式為：</p>
              <div className="bg-black/30 rounded-lg p-3 my-2 font-mono text-sm">
                h* = ρ × (σs / σf)
              </div>
              <p className="mb-2">其中 ρ 為現貨與期貨報酬相關係數，σs 為現貨標準差，σf 為期貨標準差。</p>
              <p>由於台積電期貨標的即為台積電股票，兩者價格高度相關（ρ ≈ 0.99），故避險比率接近 1:1。</p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-pink-400">
            <span className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center text-sm">3</span>
            實例計算
            <span className="text-xs font-normal text-white/40 ml-2">佔 15%</span>
          </h3>
          <div className="bg-white/5 rounded-xl p-5">
            <div className="bg-white/10 rounded-xl p-6 mb-4">
              <h4 className="font-bold text-pink-300 mb-3">📊 避險案例：某基金持有 10 萬股台積電</h4>
              <div className="space-y-2 text-sm">
                <p><strong>情境：</strong>某基金經理人持有 10 萬股台積電（50 張），現價 900 元，擔心股價下跌。</p>
                <p><strong>避險操作：</strong></p>
                <p className="ml-4">• 需要避險的股數：100,000 股</p>
                <p className="ml-4">• 每口期貨 = 2,000 股</p>
                <p className="ml-4">• 需要賣出期貨口數 = 100,000 ÷ 2,000 = <strong>50 口</strong></p>
              </div>
            </div>
            <div className="text-white/80 leading-relaxed space-y-3">
              <p><strong>情境一：股價下跌至 850 元</strong></p>
              <p className="ml-4">• 現貨損失：(850-900) × 100,000 = <span className="text-red-400">-500 萬元</span></p>
              <p className="ml-4">• 期貨獲利：(900-850) × 2,000 × 50 = <span className="text-green-400">+500 萬元</span></p>
              <p className="ml-4">• 淨損益：0 元 ✅ 成功避險</p>

              <p className="mt-4"><strong>情境二：股價上漲至 950 元</strong></p>
              <p className="ml-4">• 現貨獲利：(950-900) × 100,000 = <span className="text-green-400">+500 萬元</span></p>
              <p className="ml-4">• 期貨損失：(900-950) × 2,000 × 50 = <span className="text-red-400">-500 萬元</span></p>
              <p className="ml-4">• 淨損益：0 元 （放棄上漲獲利）</p>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-amber-400">
            <span className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-sm">4</span>
            結論與投資啟示
            <span className="text-xs font-normal text-white/40 ml-2">佔 15%</span>
          </h3>
          <div className="bg-white/5 rounded-xl p-5 text-white/80 leading-relaxed space-y-3">
            <p>透過本次分析，可以得到以下結論：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>期貨避險可以有效降低價格風險</strong>：透過建立相反部位，現貨與期貨損益相抵</li>
              <li><strong>避險的代價是放棄潛在獲利</strong>：若股價上漲，避險者無法享受漲幅</li>
              <li><strong>保證金制度降低避險成本</strong>：只需約 16.7 萬元保證金即可避險 180 萬元的現股</li>
              <li><strong>期貨市場流動性很重要</strong>：台積電期貨日均量大，買賣價差小，避險成本低</li>
            </ul>
            <p className="mt-3"><strong>投資啟示：</strong>對於長期持有台積電的投資人，當預期短期內股價可能下跌時（如財報公布前、地緣政治風險升高），可考慮使用台積電期貨進行短期避險，待風險事件過後再平倉。</p>
          </div>
        </div>

        {/* Section 5 - AI Reflection */}
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-emerald-400">
            <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-sm">5</span>
            AI 使用反思
            <span className="text-xs font-normal text-white/40 ml-2">佔 20%｜必寫</span>
          </h3>
          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-xl p-5 border border-emerald-500/20 text-white/80 leading-relaxed space-y-4">
            <div>
              <h4 className="font-bold text-emerald-300 mb-2">【使用的工具】</h4>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>NotebookLM：</strong>上傳 ch02、ch03、ch04 講義，並使用「Discover 探索來源」搜尋網路資料</li>
                <li><strong>NotebookLM Deep Research：</strong>深度研究台積電期貨市場的最新數據</li>
                <li><strong>Gemini：</strong>潤飾文章與確認計算正確性</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-emerald-300 mb-2">【怎麼使用】</h4>
              <p>我先在 NotebookLM 上傳講義，提問「什麼是空頭避險」確認課本定義。接著使用「Discover」功能搜尋「台積電期貨 2024」，AI 自動找到相關網路資源。最後用 Deep Research 深度研究，3分鐘後 AI 產出一份完整的台積電期貨市場報告，包含最新保證金與交易量數據。</p>
            </div>
            <div>
              <h4 className="font-bold text-emerald-300 mb-2">【發現 AI 的錯誤】⭐ 加分重點</h4>
              <p>Gemini 在解釋避險時提到可以用<strong>「選擇權」</strong>來避險，並建議買進賣權（Put）。但這學期 ch02-ch04 只教期貨避險，選擇權避險是 ch07 以後的內容。我決定專注在期貨避險，沒有採用選擇權的建議。</p>
            </div>
            <div>
              <h4 className="font-bold text-emerald-300 mb-2">【心得】</h4>
              <p>透過這次報告，我發現 AI 有時會給出超出課程範圍的建議。我學會用課本內容來檢驗 AI 的回答。同時也了解到，衍生性商品真的可以幫助投資人管理風險，但也要付出代價（放棄潛在獲利）。</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 mt-4">
              <p className="font-bold text-white/60 mb-2">📸 對話截圖（實際報告需附上）</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white/5 rounded-lg p-4 text-center text-sm text-white/40">
                  [截圖1]<br />NotebookLM<br />問空頭避險
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center text-sm text-white/40">
                  [截圖2]<br />Gemini<br />搜尋契約規格
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center text-sm text-white/40">
                  [截圖3]<br />AI建議選擇權<br />超出課程範圍
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-6 p-5 bg-amber-500/20 rounded-2xl border border-amber-500/30">
          <p className="font-bold text-amber-300 flex items-center gap-2">
            <span className="text-xl">💡</span> 範例重點提示
          </p>
          <ul className="text-white/70 mt-2 space-y-1 text-sm">
            <li>• 每段都有清楚標示使用哪一章的概念（ch02、ch03、ch04）</li>
            <li>• 有<strong>實際數字計算</strong>，展現對公式的理解</li>
            <li>• AI 反思有指出「AI 建議超出課程範圍」，展現批判思考</li>
            <li>• 結論有提出「投資啟示」，不只是複述課本</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default SampleTab;
