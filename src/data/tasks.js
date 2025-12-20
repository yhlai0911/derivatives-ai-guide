// 第一週任務
export const week1Tasks = [
  {
    id: 'w1t1',
    day: 'DAY 1',
    task: '📚 選定研究主題',
    where: '主題清單',
    link: '#topics',
    emoji: '🎯',
    reward: '+5 經驗值',
    steps: [
      '瀏覽「寶藏主題」頁面，了解 6 大推薦主題',
      '選擇一個你有興趣的主題（或自訂主題）',
      '確認該主題對應的課本章節（至少 2 章）',
      '用一句話寫下你想探討的核心問題'
    ],
    tips: '💡 選題建議：選你真正好奇的主題，寫起來才有動力！',
    deliverable: '✏️ 產出：確定研究主題 + 對應章節'
  },
  {
    id: 'w1t2',
    day: 'DAY 2',
    task: '🔍 上傳資料到 NotebookLM',
    where: 'NotebookLM',
    link: 'https://notebooklm.google.com/',
    emoji: '📤',
    reward: '+10 經驗值',
    steps: [
      '前往 notebooklm.google.com 建立新筆記本',
      '上傳相關章節的課本 PDF（如 ch02、ch03）',
      '搜尋 2-3 篇相關新聞或研究報告並上傳',
      '測試問 AI 一個簡單問題，確認資料有被讀取'
    ],
    tips: '💡 資料來源：經濟日報、工商時報、期交所官網、CMoney',
    deliverable: '✏️ 產出：NotebookLM 筆記本（含 3-5 份資料）'
  },
  {
    id: 'w1t3',
    day: 'DAY 3',
    task: '💬 與 AI 對話探索主題',
    where: 'NotebookLM / Gemini',
    link: 'https://gemini.google.com/',
    emoji: '🤖',
    reward: '+15 經驗值',
    steps: [
      '在 NotebookLM 提問：「這個主題的背景是什麼？」',
      '提問：「課本哪些概念可以解釋這個現象？」',
      '提問：「有哪些台灣市場的實際案例？」',
      '將有用的回答複製到 Google Docs 暫存'
    ],
    tips: '💡 提問技巧：問「為什麼」比問「是什麼」更能激發思考！',
    deliverable: '✏️ 產出：至少 10 則 AI 對話紀錄'
  },
  {
    id: 'w1t4',
    day: 'DAY 4',
    task: '📝 整理筆記與大綱',
    where: 'Google Docs',
    link: 'https://docs.google.com/',
    emoji: '✍️',
    reward: '+10 經驗值',
    steps: [
      '建立 Google Docs 文件，設定標題格式',
      '列出報告大綱：背景、理論、案例、結論、AI反思',
      '在每個段落下方列出 2-3 個要點',
      '標註每段預計使用的章節（如 ch02、ch04）'
    ],
    tips: '💡 大綱格式：每段寫 1-2 句摘要，讓老師知道你要寫什麼',
    deliverable: '✏️ 產出：報告大綱（約 300-500 字）'
  },
  {
    id: 'w1t5',
    day: 'DAY 5',
    task: '🚩 繳交報告大綱',
    where: 'Tronclass 創課',
    link: 'https://tronclass.dyu.edu.tw/course/8081/content#/',
    emoji: '✅',
    reward: '+10% 成績',
    isCheckpoint: true,
    steps: [
      '檢查大綱是否包含：主題、章節對應、各段摘要',
      '將 Google Docs 匯出為 PDF',
      '登入 Tronclass 創課系統',
      '上傳 PDF 檔案並確認送出'
    ],
    tips: '⚠️ 注意：大綱佔總成績 10%，遲交會扣分！',
    deliverable: '✏️ 產出：PDF 大綱檔案（已上傳 Tronclass）'
  },
];

// 第二週任務
export const week2Tasks = [
  {
    id: 'w2t1',
    day: 'DAY 6',
    task: '🎨 用 AI 生成圖表與數據',
    where: 'AI Studio / Gemini',
    link: 'https://aistudio.google.com/',
    emoji: '📊',
    reward: '+15 經驗值',
    steps: [
      '請 AI 幫你設計一個計算範例（如避險計算）',
      '請 AI 解釋如何畫供需圖或損益圖',
      '使用 Google 試算表製作簡單圖表',
      '將圖表截圖或匯出，準備插入報告'
    ],
    tips: '💡 圖表建議：至少 1 張計算表格 + 1 張概念圖',
    deliverable: '✏️ 產出：1-2 張圖表或計算範例'
  },
  {
    id: 'w2t2',
    day: 'DAY 7',
    task: '📖 撰寫報告初稿',
    where: 'Google Docs',
    link: 'https://docs.google.com/',
    emoji: '📄',
    reward: '+20 經驗值',
    steps: [
      '根據大綱，逐段撰寫完整內容',
      '第一段：議題背景（300-400字）',
      '第二段：課本理論應用（600-800字）',
      '第三段：圖表分析 + 第四段：結論（各300字）'
    ],
    tips: '💡 寫作技巧：先求有，再求好。初稿不用完美！',
    deliverable: '✏️ 產出：報告初稿（約 1500-2000 字）'
  },
  {
    id: 'w2t3',
    day: 'DAY 8',
    task: '🔄 請 AI 協助修改潤飾',
    where: 'Gemini',
    link: 'https://gemini.google.com/',
    emoji: '✨',
    reward: '+15 經驗值',
    steps: [
      '將報告貼給 Gemini，請它檢查邏輯是否通順',
      '請 AI 指出哪些地方可以加強或補充',
      '請 AI 檢查是否有錯字或文法問題',
      '根據建議修改，但保持自己的觀點'
    ],
    tips: '⚠️ 注意：AI 是輔助，不要照單全收！要有批判思考',
    deliverable: '✏️ 產出：修改後的報告 + AI 對話截圖'
  },
  {
    id: 'w2t4',
    day: 'DAY 9',
    task: '🎯 撰寫 AI 反思 + 最終排版',
    where: 'Google Docs',
    link: 'https://docs.google.com/',
    emoji: '🔍',
    reward: '+10 經驗值',
    steps: [
      '撰寫「AI 使用反思」段落（400-500字）',
      '整理 AI 對話截圖（至少 3 張）',
      '檢查格式：標題、字體、行距是否一致',
      '確認字數達到 2000-3000 字'
    ],
    tips: '💡 加分重點：指出 AI 的錯誤或不適用之處！',
    deliverable: '✏️ 產出：完整報告（含 AI 反思 + 截圖）'
  },
  {
    id: 'w2t5',
    day: 'DAY 10',
    task: '🏆 匯出 PDF，繳交最終報告',
    where: 'Tronclass 創課',
    link: 'https://tronclass.dyu.edu.tw/course/8081/content#/',
    emoji: '🎉',
    reward: '任務完成！',
    isCheckpoint: true,
    steps: [
      '最後檢查：封面、目錄、頁碼是否完整',
      '將 Google Docs 匯出為 PDF',
      '確認 PDF 檔案可以正常開啟',
      '上傳至 Tronclass 並確認送出'
    ],
    tips: '🎉 恭喜通關！記得給自己一個獎勵！',
    deliverable: '✏️ 產出：最終報告 PDF（已上傳 Tronclass）'
  },
];

// 報告結構與評分標準
export const reportStructure = [
  {
    title: '議題背景說明',
    weight: 15,
    icon: '📝',
    description: '市場現況與重要性說明',
    tips: ['解釋為什麼這個議題重要', '提供具體的市場數據或新聞事件', '說明與課程的連結']
  },
  {
    title: '衍生性商品理論應用',
    weight: 35,
    icon: '📚',
    description: '至少連結 2 個章節的課本概念',
    tips: ['明確標示使用哪一章的概念', '正確解釋理論內容', '將理論與議題連結分析']
  },
  {
    title: '實例計算與圖表',
    weight: 15,
    icon: '📊',
    description: '台灣市場實例與計算範例',
    tips: ['提供具體的計算範例', '使用正確的公式與數據', '圖表要有標題與說明']
  },
  {
    title: '結論與投資啟示',
    weight: 15,
    icon: '💡',
    description: '個人觀點與投資建議',
    tips: ['總結分析結果', '提出自己的觀點', '給投資人的建議']
  },
  {
    title: 'AI 使用反思',
    weight: 20,
    icon: '🤖',
    description: '描述 AI 工具使用過程與批判思考',
    tips: ['說明使用了哪些 AI 工具', '分享 AI 如何幫助你完成報告', '⭐ 指出 AI 的錯誤或不適用之處']
  },
];

// AI 工具指南
export const tools = {
  notebooklm: {
    name: 'NotebookLM',
    icon: '📚',
    color: 'from-blue-500 to-indigo-600',
    desc: 'AI 筆記助手',
    steps: [
      '前往 notebooklm.google.com',
      '點擊「新增筆記本」',
      '上傳課本 PDF、新聞、研究報告',
      '開始與 AI 對話探索主題'
    ],
    tips: '💡 上傳越多相關資料，AI 回答越精準！'
  },
  gemini: {
    name: 'Gemini',
    icon: '✨',
    color: 'from-purple-500 to-pink-600',
    desc: 'Google AI 對話',
    steps: [
      '前往 gemini.google.com',
      '輸入問題開始對話',
      '可以請 AI 解釋概念、生成範例',
      '將有用的回答複製到報告中'
    ],
    tips: '💡 善用「請用台灣的例子說明」讓回答更在地化！'
  },
  aistudio: {
    name: 'AI Studio',
    icon: '🎨',
    color: 'from-green-500 to-teal-600',
    desc: '進階 AI 工具',
    steps: [
      '前往 aistudio.google.com',
      '選擇 Gemini 模型',
      '可生成圖表、分析數據',
      '適合進階應用與視覺化'
    ],
    tips: '💡 可以請 AI 生成期貨價格走勢圖或選擇權損益圖！'
  },
  docs: {
    name: 'Google Docs',
    icon: '📝',
    color: 'from-yellow-500 to-orange-600',
    desc: '線上文件編輯',
    steps: [
      '前往 docs.google.com',
      '建立新文件',
      '整理 AI 對話內容',
      '撰寫並排版報告'
    ],
    tips: '💡 善用標題樣式讓報告結構清晰！'
  }
};

// 常見問題
export const faqs = [
  { q: '這門課沒有實體上課嗎？', a: '對！這是期末自學週，運用 AI 工具完成研究報告。有問題隨時在 Tronclass 發問！' },
  { q: '一定要用 Google 的 AI 工具嗎？', a: '建議使用，因為免費且功能強大。如果你習慣其他工具（如 ChatGPT）也可以，重點是學會 AI 輔助學習。' },
  { q: '報告要寫多長？', a: '建議 2000-3000 字，重點是分析要深入、有自己的見解，不是字數越多越好。' },
  { q: '可以直接複製 AI 的回答嗎？', a: '❌ 不行！AI 是輔助工具，你需要理解、整理、加入自己的分析。直接複製會被視為抄襲。' },
  { q: '衍生性金融商品的數學公式很難，AI 可以幫忙嗎？', a: '可以！請 AI 用簡單的例子解釋 B-S 公式、Greeks 等概念，並用台灣市場的數據做練習。' },
  { q: '遇到問題怎麼辦？', a: '到 Tronclass 創課系統發問，或下課找老師聊聊！' }
];
