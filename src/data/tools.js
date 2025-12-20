export const tools = {
  notebooklm: {
    name: 'NotebookLM',
    icon: '📘',
    color: 'from-blue-500 to-cyan-400',
    desc: '上傳講義 + 網路搜尋 → AI 整理重點、深度研究',
    url: 'https://notebooklm.google.com',
    steps: [
      { title: '1. 建立筆記本', content: '點「New Notebook」→ 取名「衍生性金融商品報告」' },
      { title: '2. 上傳講義', content: '點「Add Source」→ 上傳相關章節的 PDF、Word、試算表' },
      { title: '3. 探索來源', content: '點「Discover」→ 輸入主題，AI 自動搜尋相關網路資源' },
      { title: '4. Fast Research', content: '快速搜尋（30-45秒）→ 回傳 10-15 個來源供你挑選' },
      { title: '5. Deep Research', content: '深度研究（3-5分鐘）→ AI 瀏覽數百網頁，產出完整報告' },
      { title: '6. 開始提問', content: '在對話框問問題，AI 根據所有來源（講義+網路）回答' },
    ],
    prompts: [
      '「期貨的空頭避險和多頭避險有什麼差別？請舉例」',
      '「Black-Scholes 模型的五個變數是什麼？」',
      '「請用簡單的話解釋 Delta 避險」',
      '「搜尋台積電期貨 2024 的最新交易數據」',
    ],
  },
  gemini: {
    name: 'Gemini',
    icon: '✨',
    color: 'from-purple-500 to-pink-400',
    desc: '搜尋時事資料 → 分析議題 → 潤飾文句',
    url: 'https://gemini.google.com',
    steps: [
      { title: '1. 登入', content: '用學校 Google 帳號登入' },
      { title: '2. 蒐集資料', content: '問「台積電期貨 2024 交易量」取得背景' },
      { title: '3. 請 AI 分析', content: '問「用期貨避險理論分析法人操作」' },
      { title: '4. 潤飾文章', content: '貼草稿，請「修正通順度，保持學術風格」' },
    ],
    prompts: [
      '「請整理台灣期貨市場近一年的交易量數據」',
      '「請用衍生性金融商品的角度分析 VIX 指數飆升」',
      '「請幫我潤飾這段文字，讓它更通順：[貼上草稿]」',
    ],
  },
  sheets: {
    name: 'Google 試算表',
    icon: '📊',
    color: 'from-emerald-500 to-teal-400',
    desc: '輸入數據 → 製作避險計算表',
    url: 'https://sheets.google.com',
    steps: [
      { title: '1. 輸入數據', content: 'A欄=股價, B欄=期貨價, C欄=損益計算' },
      { title: '2. 建立公式', content: '使用公式計算避險效果' },
      { title: '3. 插入圖表', content: '「插入」→「圖表」→ 選「折線圖」' },
      { title: '4. 美化圖表', content: '加標題、軸標籤、調整顏色' },
    ],
    prompts: [],
  },
  docs: {
    name: 'Google Docs',
    icon: '📄',
    color: 'from-sky-500 to-blue-400',
    desc: '撰寫報告 → 插入圖表 → 匯出 PDF',
    url: 'https://docs.google.com',
    steps: [
      { title: '1. 新增文件', content: '點「空白」→ 命名「衍生性金融商品報告_姓名」' },
      { title: '2. 套用格式', content: '標題用「標題1」，小標用「標題2」' },
      { title: '3. 插入圖表', content: '「插入」→「圖表」→「從試算表」' },
      { title: '4. 匯出 PDF', content: '「檔案」→「下載」→「PDF」' },
    ],
    prompts: [],
  },
};

export const navTabs = [
  { id: 'quest', label: '📜 主線任務', subtitle: '作業說明' },
  { id: 'map', label: '🗺️ 冒險地圖', subtitle: '每日進度' },
  { id: 'gear', label: '⚔️ 裝備指南', subtitle: '工具教學' },
  { id: 'boss', label: '🏆 通關條件', subtitle: '評分標準' },
  { id: 'grade', label: '🤖 AI 評分', subtitle: '上傳報告' },
  { id: 'sample', label: '📖 攻略範本', subtitle: '報告範例' },
  { id: 'npc', label: '💬 NPC 問答', subtitle: '常見問題' },
];
