# 必填項目標記說明

_Started 2026-06-28 14:45 UTC_

---

## User

必填的項目，都在題目後面顯示一個DS紅＊

## Assistant

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

## User

除了首頁的公司名稱和填表人姓名，後面其他必填的項目，都也要在題目後面顯示一個DS紅＊

## Assistant

_[tool: read_file]_

_[tool: read_file]_

I'll add a red asterisk for required questions and expose a `required` flag.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

The findings are all in an unrelated `uploads/` file, not my edit. Done — required questions now show a red DS asterisk (＊) after the question text, matching the intro fields. The "選填" tag remains on optional questions.

## User

"選填"的標籤請明顯一點，請使用DS中tag元件的pill型"DATA" 那一顆的樣式

## Assistant

_[tool: list_files]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

"選填" 標籤現在使用 DS Tag 的 brand pill 樣式（藍底膠囊，像 "DATA" 那顆），更明顯了。

