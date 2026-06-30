/* ============================================================================
   IMU 辦公室前置問卷 — 題目設定檔  (questions.js)
   ----------------------------------------------------------------------------
   這是唯一需要編輯的檔案。改完存檔，表單會自動套用。

   ▸ 調整順序：把整段  { ... },  上下搬動即可（同一區段內、或整個題目）
   ▸ 改文字  ：改  q（問題）、hint（灰色說明）、placeholder（輸入框提示字）
   ▸ 必填/選填：required: true  → 必填
                required: false → 選填（右上角顯示「選填」標籤）
   ▸ 單選/多選選項：改 options 裡的 label 文字；要增減選項就加/刪一行 { ... }
   ▸ 區段（左側進度條的 5 個階段）：改 label / eye，或整段搬移、增減

   type 可用值：
     "text"      單行文字
     "number"    數字（可加 unit 顯示單位，sumSuffix 為摘要用單位）
     "textarea"  多行文字（可加 rows 控制高度）
     "radio"     單選（需要 options）
     "checkbox"  多選（需要 options；allowOther:true 會出現「其他」補充框）
     "window"    聯絡窗口專用（姓名＋同填表人＋職稱）
     "contact"   聯絡方式專用（LINE／電話／Email 三格）
   sumLabel = 這題在最後「填表摘要」裡顯示的短標籤
   showIf   = 條件顯示，例：showIf:{ key:"hasPast", equals:"yes" }
   ============================================================================ */

export const INTAKE_CONFIG = {

  /* 開頭頁先填的兩個欄位（送出前必填） */
  intro: {
    fields: [
      { key: "companyName", label: "公司名稱",      required: true, placeholder: "例：ＯＯ股份有限公司" },
      { key: "fillerName",  label: "您的姓名或稱呼", required: true, placeholder: "例：王小明、Emily" },
    ],
  },

  sections: [

    /* ───────── 區段 1 ───────── */
    {
      label: "人員規模", eye: "HEADCOUNTS",
      questions: [
        { key: "currentHeadcount", type: "number", required: true,
          q: "貴公司現在的座位人數？",
          hint: "了解現況幫助我們判斷是要維持原規模還是擴充升級",
          prefix: "約", placeholder: "50", unit: "人", sumLabel: "現在人數", sumSuffix: " 人"  },

        { key: "headcount", type: "number", required: true,
          q: "搬到新辦公室後，有多少成員需要入座？",
          hint: "含正職員工、長期約聘、常駐廠商等需要位子的人員",
          prefix: "約", placeholder: "80", unit: "人", sumLabel: "新進人數", sumSuffix: " 人" },
              
        { key: "officeSystem", type: "radio", required: true,
          q: "新辦公室預計採用什麼樣的的座位制度？",
          // hint: "",
          sumLabel: "座位制度",
          allowOther: true, otherKey: "officeSystemOther", otherRows: 4, otherPlaceholder: "請補充說明...",
          options: [
            { value: "fixed",   label: "全員固定座位制"},
            { value: "flex",    label: "完全彈性選座制" },
            { value: "hybrid",  label: "混合辦公制，部分員工不需固定座位" },
            { value: "build",   label: "目前沒有明確制度，希望這次一起建立" },
            { value: "other",   label: "其他" },
          ] },

      ],
    },

    /* ───────── 區段 2 ───────── */
    {
      label: "場地概況", eye: "SITE OVERVIEW",
      questions: [
        { key: "currentSite", type: "text", required: true,
          q: "貴公司現在的位置？",
          hint: "商辦名稱或地址",
          placeholder: "例：ＯＯ商業大樓", sumLabel: "現在地點" },

        { key: "moveInSite", type: "text", required: true,
          q: "新辦公室的預計位置？",
          hint: "商辦名稱或地址",
          placeholder: "例：ＯＯ科技園區", sumLabel: "預計入駐地點" },
        
        { key: "moveInDate", type: "text", required: true,
          q: "新辦公室預計何時入駐？",
          hint: "大約的時間節點或範圍即可",
          placeholder: "例：2026 Q1、明年 3 月底前", sumLabel: "預計入駐時間" },

        { key: "leaseArea", type: "number", required: true,
          q: "租約上記載的坪數是多少？",
          hint: "即房東合約上的登記面積（公設比尚未扣除）",
          prefix: "約", placeholder: "120", unit: "坪（登記面積）", sumLabel: "租約坪數", sumSuffix: " 坪" },

        { key: "usableArea", type: "number", required: false,
          q: "扣除公設後，實際可規劃的面積大約是多少？",
          hint: "如不確定可跳過，場勘時可以一起確認",
          prefix: "約", placeholder: "90", unit: "坪（實際可用）", sumLabel: "實際可用坪數", sumSuffix: " 坪" },

        { key: "monthlyRent", type: "text", required: false,
          q: "月租金大約是多少？",
          hint: "僅供評估整體成本結構參考用，不會對外揭露",
          prefix: "約", placeholder: "例：每月 12 萬、每坪 2,500 元", unit: "元", sumLabel: "月租金", sumSuffix: " 元"  },
      ],
    },

    /* ───────── 區段 3 ───────── */
    {
      label: "預算範圍", eye: "BUDGET",
      questions: [
        { key: "budgetFurniture", type: "radio", required: true,
          q: "您的裝修預算是否要涵蓋家具與設備採購？",
          hint: "選擇後，下一題的預算估算會自動切換顯示",
          sumLabel: "家具設備",
          allowOther: true, otherWhen: "unknown", otherKey: "budgetFurnitureNote", otherRows: 2, otherPlaceholder: "請補充說明…",
          options: [
            { value: "yes",     label: "是，家具設備包含在內" },
            { value: "no",      label: "否，家具設備另計" },
            { value: "partial", label: "部分包含，細節待討論" },
            { value: "unknown", label: "尚未確定，希望協助評估" },
          ] },

        { key: "budgetRange", type: "radio", required: true,
          q: "依您的坪數與人數，這次規劃的預算大約落在哪個級距？",
          hint: "以下為預算區間建議值（設計、監工費另計），已依您填入的坪數、人數自動估算，僅供初步參考。",
          sumLabel: "裝修預算",
          computed: "budget",
          allowOther: true, otherWhen: "tbd", otherKey: "budgetRangeNote", otherRows: 2, otherPlaceholder: "請補充說明…",
          options: [
            { value: "light", label: "輕量" },
            { value: "tier1", label: "標準" },
            { value: "tier2", label: "進階" },
            { value: "tier3", label: "旗艦" },
            { value: "tbd",   label: "尚未確定，希望協助評估" },
          ] },

        { key: "feeAck", type: "checkbox", required: true,
          q: "設計費與監工費將依專案性質另行報價",
          sumLabel: "費用知悉",
          options: [
            { value: "ack", label: "我已知悉" },
          ] },
      ],
    },

    /* ───────── 區段 4 ───────── */
    {
      label: "目標方向", eye: "VISION & GOALS",
      questions: [
        { key: "reasons", type: "checkbox", required: true,
          q: "這次換辦公室的主要原因是什麼？（可複選）",
          sumLabel: "換辦公室原因",
          allowOther: true, otherKey: "otherReason", otherPlaceholder: "請補充說明...",
          options: [
            { value: "space",     label: "現有空間不敷使用" },
            { value: "lease",     label: "租約到期或即將到期" },
            { value: "image",     label: "品牌形象升級需求" },
            { value: "work_mode", label: "工作模式調整（混合辦公、ABW 等）" },
            { value: "talent",    label: "吸引人才、提升員工體驗" },
            { value: "merger",    label: "組織整併或分拆" },
            { value: "other",     label: "其他" },
          ] },

        { key: "goals", type: "textarea", required: true, rows: 4,
          q: "您最希望新辦公室達成什麼？",
          hint: "例如：提升跨部門協作、解決儲存混亂、打造能留住人才的環境",
          placeholder: "請描述最希望解決的問題，或最在意的效果", sumLabel: "辦公室目標" },

        { key: "references", type: "textarea", required: false, rows: 4,
          q: "心目中有沒有喜歡的參考風格或案例？",
          hint: "品牌名稱、連結、或任何形容詞，協助我們提前掌握您的美學方向",
          placeholder: "例：喜歡 Google 台灣辦公室的開放感、想要像無印良品的整潔…", sumLabel: "參考風格" },
      ],
    },

    /* ───────── 區段 5 ───────── */
    {
      label: "專案執行方式", eye: "HOW YOU'D LIKE TO WORK",
      questions: [
        { key: "window", type: "window", required: true,
          q: "這個專案的主要聯絡窗口是？",
          hint: "負責後續溝通協調的聯絡人",
          sumLabel: "主要窗口" },

        { key: "contact", type: "contact", required: false,
          q: "窗口的主要聯絡方式",
          hint: "填入您方便接收訊息的聯絡方式，至少一種即可" },

        { key: "fillerRole", type: "radio", required: true,
          q: "您在這個專案中的角色是？",
          hint: "協助我們在見面時對應適合的溝通深度與提案方式",
          sumLabel: "填表人角色",
          allowOther: true, otherKey: "fillerRoleNote", otherRows: 1, otherPlaceholder: "請填寫您的角色…",
          options: [
            { value: "decision",  label: "主要決策者",          sub: "我可以直接拍板定案" },
            { value: "recommend", label: "評估後向決策者提報",  sub: "我負責比較方案、彙整後呈報" },
            { value: "execute",   label: "執行窗口",            sub: "我負責協調聯絡，決策由主管或老闆定奪" },
            { value: "other",     label: "其他角色" },
          ] },

        { key: "decisionMaker", type: "text", required: false,
          q: "若決策者非填表人，影響最終決策方向的職稱或角色？",
          placeholder: "例：執行長、董事長、管理部總監", sumLabel: "決策者" },

        { key: "stakeHolders", type: "textarea", required: false, rows: 3,
          q: "從選定方案到正式啟動，貴司預計會有哪些參與者？",
          hint: "例如：總務部、財務秘書、人資長...",
          placeholder: "簡述", sumLabel: "甲方參與者" },

        { key: "buying", type: "textarea", required: false, rows: 3,
          q: "簽約到開工期間，內部有無特殊的採購或稽核制度需我們配合？",
          hint: "例如：金額門檻、議價程序、招投標制度等",
          placeholder: "簡述", sumLabel: "甲方制度" },
              
        { key: "hasPast", type: "radio", required: true,
          q: "過往是否有執行過辦公室裝修或搬遷的專案？",
          sumLabel: "過往裝修經驗",
          options: [
            { value: "yes", label: "有" },
            { value: "no",  label: "這是第一次" },
          ] },

        { key: "pastExp", type: "textarea", required: false, rows: 4,
          q: "上一次的合作經驗如何？",
          hint: "有什麼特別滿意、或希望這次改善的地方？幫助我們更了解您的期待與顧慮",
          placeholder: "例：設計很好但工期延誤；預算超支；溝通不順暢；或整體都很滿意…",
          sumLabel: "合作回饋",
          showIf: { key: "hasPast", equals: "yes" } },
      
      ],
    },

  ],
};


/* ============================================================================
   預算試算參數  (BUDGET_MODEL) — 區段 3「預算範圍」的動態估算來源
   ----------------------------------------------------------------------------
   單價、係數、家具加成都在這裡調整，表單會即時套用。金額單位：萬元。
     areaKeys         計算坪數來源，依序取第一個有填的（實際可用優先、租約備援）
     headcountKey     家具設備以哪個人數欄位計
     roundTo          金額四捨五入精度（100 = 最近 100 萬）
     tiers            三個級距的「每坪單價區間」(low–high，萬元/坪)
     scale            規模經濟係數：坪數 ≤ max 套用該 mult（坪數越大越省）
     furniturePerHead 家具設備每人單價區間 (low–high，萬元/人)，不吃規模係數
   ============================================================================ */
export const BUDGET_MODEL = {
  areaKeys: ["usableArea", "leaseArea"],
  headcountKey: "headcount",
  furnitureScopeKey: "budgetFurniture",
  roundTo: 100,
  tiers: [
    { value: "tier1", name: "標準", low: 4, high: 6 },
    { value: "tier2", name: "進階", low: 6, high: 10 },
    { value: "tier3", name: "旗艦", low: 10, openEnded: true },
  ],
  scale: [
    { max: 100, mult: 1.10 },
    { max: 200, mult: 1.00 },
    { max: 300, mult: 0.95 },
    { max: 400, mult: 0.90 },
    { max: Infinity, mult: 0.85 },
  ],
  furniturePerHead: { low: 2, high: 5 },

  /* 選項上的文字（在這裡改文案即可）。
     ▸ 數字前綴依 Q10「是否含家具」自動切換：
         scopeYes     ＝選「是，家具設備包含在內」時的前綴
         scopeNo      ＝選「否，家具設備另計」時的前綴
         scopePartial ＝選「部分包含／尚未確定」時的前綴
     ▸ light＝門檻以下選項：顯示為「{lightName}・{金額}{lightSuffix}」，點選後出現 lightNote
     ▸ unit＝金額單位 */
  text: {
    scopeYes: "總預算",
    scopeNo: "裝修工程預算",
    scopePartial: "總預算約",
    lightName: "輕量",
    lightSuffix: " 萬以下",
    lightNote: "依您的辦公室規模，此預算區間可能需要特別精簡專案範疇——我們再一起討論適用的合作方式。",
    unit: "萬",
  },
};
