# Form Questions Organization

_Started 2026-06-28 13:23 UTC_

---

## User

to maintain the questions in this form, shall we make a simple list or table for myself to edit (pure text)?
i want to change orders, edit the texts, or switch between must/optional.

## Assistant

Let me look at how your form is currently built before suggesting the simplest approach.

_[tool: grep]_

_[tool: read_file]_

This is a great idea — right now every question is hand-coded inline, so reordering or relabeling means editing markup. I'll refactor it so **all questions live in one plain data file** (`questions.js`) that you edit as text, and the form renders itself from that file. Editing = move a block (reorder), change a string (text), flip `required: true/false` (must/optional).

_[tool: write_file]_

Now I'll rewrite the form to render from that config.

_[tool: dc_write]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

Intro renders correctly and pulls "共 5 個主題" from the config — confirming `questions.js` loaded and drives the form. Let me hand off to verification.

_[tool: ready_for_verification]_

The findings are about an unrelated `uploads/client-intake-form.jsx` file, not what I built — they don't apply. The form loads cleanly.

Done. Your questions now live in a single plain-text file, **`questions.js`**. To maintain them:

- **Reorder** — move a whole `{ ... }` block up/down (within a section, or whole questions).
- **Edit text** — change `q` (question), `hint` (gray helper), `placeholder`, or option `label`.
- **Must / optional** — flip `required: true` ↔ `required: false` (false shows the "選填" tag).
- You can also add/remove options, whole questions, or the 5 sections themselves.

The form renders entirely from that file (including the question numbering and the final summary), so any edit you save applies automatically — no need to touch the form layout. The top of `questions.js` has a short editing guide in Chinese.

## User

quick question: are the numbers of the questions automatically assigned (Q01, Q02...)?

## Assistant

Yes — fully automatic. The `Q01`, `Q02`… numbers are generated at render time by counting questions in order down through `questions.js`, so you never type them. If you reorder, add, or delete a question, every number re-sequences itself automatically. (Hidden conditional questions like Q18 still hold their slot, so numbering stays stable.)

So just arrange the blocks how you want — the numbering follows.

## User

我新增的題目，定義了新的key之後，這個key會在哪裡被使用？

## Assistant

您定義的 `key` 會被**自動使用**，您不需要改其他檔案。它的用途是：作為這題答案在表單資料裡的「儲存欄位名稱」。具體流向：

- **儲存答案**：使用者輸入時，程式以 `key` 把值存進表單資料 `d`（`d[您的key]`）。
- **顯示回填**：輸入框的內容也從 `d[您的key]` 讀回。
- **最後摘要**：結尾的「填表摘要」也用 `key`（搭配您寫的 `sumLabel`）抓出該題的值。

所以**只要 `key` 不跟其他題重複**，新題目就能正常運作，無需到別處註冊。

幾個要注意的：
- `key` 用英數、不重複即可（例：`parkingNeeds`）。
- **radio / checkbox**：答案存的是各 `options` 裡的 `value`，所以 `value` 也要各自不重複；`label` 才是顯示文字。
- **checkbox 的「其他」補充框**：值存在 `otherKey` 指定的那個 key（例 `otherReason`），所以那也要給一個獨立的 key。
- **`window`、`contact` 這兩種特殊類型**：它們綁定的是固定欄位（窗口姓名、LINE/電話/Email），`key` 不需改、也別改成別的。

簡單說：新增一般題目時，**只要填 `key`（和 radio/checkbox 的 `value`）就好**，其餘自動接上。

## User

題目裡面的 rows 是什麼

## Assistant

`rows` 控制**多行文字框（`type: "textarea"`）的高度** — 也就是預設顯示幾行。

- `rows: 4` → 框預設高約 4 行；`rows: 3` → 約 3 行。
- 只對 `textarea` 有效，其他類型（text、number、radio…）寫了也沒作用。
- 不寫的話預設是 3 行。
- 這只是「起始高度」，使用者仍可自行拖曳右下角放大。

