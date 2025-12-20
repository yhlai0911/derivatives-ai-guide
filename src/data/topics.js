// 衍生性金融商品熱門議題（對應課程章節）
export const topics = [
  {
    title: '📈 台積電期貨與 AI 概念股避險',
    chapters: 'ch02 期貨 + ch05 股價指數期貨',
    color: 'from-blue-400 to-cyan-500',
    difficulty: '⭐⭐',
    hint: '股票期貨 → 避險工具 → 鎖定成本',
    event: {
      headline: '台積電期貨日均量突破 5 萬口，AI 概念股避險需求飆升！',
      date: '2024 年',
      details: [
        '台積電股價從 500 元飆漲至 1000+ 元，波動加劇',
        '法人利用台積電期貨進行避險，鎖定持股成本',
        '期貨保證金約 16.7 萬元，相較現股門檻低很多',
        'AI 伺服器需求帶動，台積電成為全球焦點'
      ],
      analysis: '運用 ch02 期貨基本概念說明避險原理，ch05 股價指數期貨解釋如何用期貨鎖定投資組合風險'
    }
  },
  {
    title: '🔬 微型台指期貨降低交易門檻',
    chapters: 'ch02 期貨導論 + ch03 契約特色',
    color: 'from-green-400 to-emerald-500',
    difficulty: '⭐',
    hint: '契約規格縮小 → 參與門檻降低',
    event: {
      headline: '微型台指期貨上市，一口只要 2.4 萬保證金！',
      date: '2024 年',
      details: [
        '微台契約乘數為每點 10 元，是大台的 1/20',
        '以加權指數 24,000 點計算，契約價值約 24 萬元',
        '保證金門檻大幅降低，小資族也能參與',
        '期交所推動契約微型化，與國際接軌'
      ],
      analysis: '運用 ch02 說明期貨契約基本要素，ch03 解釋契約規格設計如何影響市場參與度'
    }
  },
  {
    title: '📊 台灣期貨市場年交易量衝 4 億口',
    chapters: 'ch01 衍生性金融商品概論 + ch02 期貨導論',
    color: 'from-purple-400 to-pink-500',
    difficulty: '⭐',
    hint: '市場規模 → 流動性 → 價格發現功能',
    event: {
      headline: '2024 年期貨交易量有望突破 4 億口，創歷史新高！',
      date: '2024 年 10 月',
      details: [
        '前九月總交易量已超過 3 億口，日均量 170 萬口',
        'AI 概念股波動、美國降息、總統大選等議題帶動交易',
        '夜盤交易占比接近 31.8%，較去年成長 30%',
        '連續五年交易量維持在 3 億口以上'
      ],
      analysis: '運用 ch01 說明衍生性金融商品市場功能（避險、投機、價格發現），ch02 解釋期貨市場的重要性'
    }
  },
  {
    title: '📅 週五到期臺指選擇權新商品',
    chapters: 'ch07 選擇權概論 + ch12 交易策略',
    color: 'from-orange-400 to-red-500',
    difficulty: '⭐⭐⭐',
    hint: '到期日設計 → 避開假日跳空風險',
    event: {
      headline: '期交所推出週五到期選擇權，避險策略更靈活！',
      date: '2024 年',
      details: [
        '過去週三到期常遇假日後大幅跳空風險',
        '新增週五到期選擇權，提供更多策略組合',
        '可與月選、週三週選組成各種價差策略',
        '投資人能取得更好的避險效果'
      ],
      analysis: '運用 ch07 選擇權基本概念，ch12 說明如何運用不同到期日的選擇權建構價差策略'
    }
  },
  {
    title: '🧮 Black-Scholes 模型與權證定價',
    chapters: 'ch10 B-S 理論 + ch11 認購權證',
    color: 'from-indigo-400 to-purple-500',
    difficulty: '⭐⭐⭐',
    hint: 'B-S 公式 → 理論價格 vs 市場價格',
    event: {
      headline: '權證定價爭議：理論價與市場價差異大！',
      date: '2024 年',
      details: [
        '投資人質疑券商權證定價不透明',
        'B-S 模型假設與實際市場存在落差',
        '波動率估計是影響權證價格的關鍵因素',
        '金管會要求券商提高權證定價透明度'
      ],
      analysis: '運用 ch10 B-S 模型推導選擇權理論價格，ch11 說明認購權證的定價機制與市場實務'
    }
  },
  {
    title: '🔤 Greek Letters 與風險管理',
    chapters: 'ch14 Greek Letters + ch08 價格行為',
    color: 'from-teal-400 to-cyan-500',
    difficulty: '⭐⭐⭐',
    hint: 'Delta、Gamma、Theta、Vega → 風險拆解',
    event: {
      headline: '法人如何用 Greeks 管理選擇權部位風險？',
      date: '2024 年',
      details: [
        'Delta 衡量標的價格變動對選擇權價格的影響',
        'Gamma 衡量 Delta 的變動速度，影響避險調整頻率',
        'Theta 代表時間價值流逝，賣方收取時間價值',
        'Vega 衡量波動率變動的風險，VIX 飆升時尤其重要'
      ],
      analysis: '運用 ch14 Greek Letters 說明各風險指標意義，ch08 解釋選擇權價格行為與敏感度分析'
    }
  }
];

// 自訂主題建議
export const customTopicSuggestions = [
  'VIX 恐慌指數',
  '碳權期貨',
  '比特幣期貨',
  '外匯選擇權',
  '利率交換',
  '結構型商品'
];
