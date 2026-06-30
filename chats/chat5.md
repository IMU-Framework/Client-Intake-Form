# 標籤翻譯建議

**標題：標籤翻譯建議**

或更簡潔

_Started 2026-06-29 03:16 UTC_

---

## User

"窗口決策"區段的label我正在改成"專案執行方式"，對應的英文eye建議怎麼下？
(不用編輯，給我文字建議就好)

## Assistant

「專案執行方式」對應的英文 overline，幾個建議（依語氣排序）：

- **PROJECT EXECUTION** — 最直接、最穩
- **HOW WE WORK** — 較親切、偏 IMU 那種 quiet/direct 的口吻
- **WAYS OF WORKING** — 強調協作模式
- **ENGAGEMENT MODEL** — 偏顧問業正式用語，強調合作關係
- **DELIVERY APPROACH** — 強調交付方式

考量你們是設計顧問、品牌調性是 architectural／understated，我會選 **HOW WE WORK**（最貼 voice）或 **PROJECT EXECUTION**（最精準對應中文）。

如果這段其實在問「客戶想怎麼跟你們配合 / 決策窗口怎麼運作」，那 **ENGAGEMENT MODEL** 會更準。要照設計系統的 overline 樣式（UPPERCASE + 寬字距）下的話，建議全大寫：`HOW WE WORK` / `PROJECT EXECUTION`。

## User

「客戶想怎麼跟你們配合 / 決策窗口怎麼運作」

如果我用"HOW YOU WORK" OK嗎？

## Assistant

文法沒問題，但語意會跑掉。

「HOW WE WORK」= 我們（IMU）的工作方式。
「HOW YOU WORK」= 你（客戶）怎麼運作 —— 在這段問「你們內部決策窗口怎麼運作」的脈絡下，其實是對的方向,但讀起來像在「審視客戶」,口吻偏生硬。

更貼合「客戶想怎麼配合 / 窗口怎麼運作」的選項：

- **HOW WE'LL WORK TOGETHER** — 最準，強調雙方協作（我的首選）
- **WORKING TOGETHER** — 簡潔版，同樣聚焦合作
- **YOUR TEAM & DECISIONS** — 若重點在窗口／決策權責
- **DECISION-MAKING** — 若純粹問決策流程

如果你想保留「以客戶為主詞」的視角，又不要太生硬，可以用 **HOW YOU'D LIKE TO WORK**（你希望怎麼配合）—— 這個比 "HOW YOU WORK" 自然，也更貼問卷語氣。

但整體我還是建議 **WORKING TOGETHER** 或 **HOW WE'LL WORK TOGETHER**,最符合 IMU 那種 quiet、雙向的調性。

## User

第一部分 Q03座位制度
增加一個選項option：其他
點選其他後，跳出文字框row:4，讓客戶填寫細節。

## Assistant

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

Now I have the full picture. Let me make the edits.

**1. questions.js** — add the "其他" option + config:

_[tool: str_replace_edit]_

**2. DC logic** — radio enrich + summary + state default:

_[tool: str_replace_edit]_

**3. DC template** — add the "其他" textarea inside the radio block:

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Done. Q03 座位制度 now has an **「其他」** option, and selecting it reveals a 4-row text box (state key `officeSystemOther`) for the client to fill in details. It also appears in the final summary. The findings are pre-existing warnings on an unrelated `uploads/` file, not these edits.

## User

Q01&02，在人數填寫框前面寫上 "約"

## Assistant

_[tool: str_replace_edit]_

Now the DC — number enrich + template:

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Done. Q01 和 Q02 的人數輸入框前面現在都會顯示「約」。（findings 都來自無關的 `uploads/` 舊檔，與這次修改無關。）

## User

（findings 都來自無關的 uploads/ 舊檔，與這次修改無關。）
這是什麼

## Assistant

「findings」是系統在每次驗證時，自動拿你專案裡的檔案去比對 IMU 設計系統規範後給的**建議清單**（例如：不要寫死色碼 `#FFFFFF`，改用設計系統的色彩 token）。它只是提醒，不是錯誤。

而那些提醒全部指向 `uploads/client-intake-form.jsx` 這個檔案 —— 它在 `uploads/` 資料夾裡，是早期上傳／殘留的一份舊版表單檔，**目前的表單（`Client Intake Form.dc.html`）根本沒有用到它**。所以那些警告跟你這次改的「約」「其他」完全無關，可以忽略。

如果你想讓清單乾淨一點，我可以直接把那個沒在用的 `uploads/client-intake-form.jsx` 刪掉 —— 要我刪嗎？

## User

請刪除。Client Intake Form (DS components).dc.html 亦刪除。

## Assistant

_[tool: delete_file]_

兩個檔案都已刪除。

## User

{ value: "tbd",       label: "尚未確定，希望IMU協助評估" },
 { value: "unknown", label: "尚未確定，希望IMU協助評估" },

當區段3的題目，客戶點選這兩項時，也跳出rows:4 文字框請他們補充說明

## Assistant

_[tool: read_file]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Now update the DC radio logic to trigger on `otherWhen`, plus the summary and state defaults:

_[tool: str_replace_edit]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

完成。區段3 兩題選到「尚未確定，希望IMU協助評估」時，都會跳出 4 行補充說明欄，內容也會帶進最後的摘要。

## User

Q17 其他角色，

## Assistant



## User

Q17 其他角色，
當選擇時出現rows:1的文字框請客戶填寫

## Assistant

_[tool: read_file]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Add the state default:

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

完成。Q17 選「其他角色」時，會出現 1 行文字框讓客戶填寫，內容也會帶進摘要。

## User

Q09 我已經自己加上prefix, unit，但是沒有在html看到顯示？

## Assistant

_[tool: grep]_

_[tool: read_file]_

Q09 是 `type: "text"`，但 prefix/unit 目前只接在 number 類型。我幫 text 類型也接上：

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

完成。Q09 的 prefix「約」與 unit「元」現在會顯示在文字框前後。

提醒一下：Q09 的 placeholder 是「例：每月 12 萬、每坪 2,500 元」，跟前面的「約」＋後面的「元」一起看可能會稍微擠或語意重複，你可以視情況把 placeholder 簡化（例如只留「12」）。要我調整再跟我說。

