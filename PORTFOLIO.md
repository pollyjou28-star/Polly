# 待辦清單 Web App

這是一個在 GitHub Copilot 實戰工作坊中完成的待辦清單 Web App，目標是用純前端技術快速建立一個可用、可維護、可展示的單頁應用程式。

## 線上展示

GitHub Pages：
https://<你的帳號>.github.io/<你的repo名稱>/

## 功能

- 新增待辦事項
- 標記待辦項目為已完成或未完成
- 刪除單一待辦項目
- 顯示未完成項目的數量
- 當清單為空時顯示提示文字
- 支援全部、未完成、已完成篩選
- 提供淺色 / 深色模式切換
- 主題偏好會記住，並可跟隨系統設定
- 以純前端方式保存資料，重新整理後仍保留內容

## 技術

這個專案使用純 HTML、CSS 與原生 JavaScript 開發，沒有使用任何框架或套件。

- 前端技術：HTML、CSS、JavaScript
- 框架：無
- 套件：無
- 資料保存：瀏覽器 localStorage
- 外部依賴：無，可離線運作

## 開發方式

這個專案是透過 GitHub Copilot Agent Mode、MCP，以及 .github/prompts 中的 agentic workflow 來逐步完成的。

- 使用 GitHub Copilot 協助生成與調整前端程式碼
- 透過 Microsoft Learn MCP 查詢官方文件，確認深色模式與無障礙相關建議
- 透過 GitHub MCP 讀取 issue、理解需求與修正方向
- 依照專案的 .github/copilot-instructions.md 規範開發，保持專案風格一致
- 使用 prompt 腳本來執行修正 issue、提交與建立 Pull Request 的流程

## 我學到什麼

- 以純前端方式快速建立一個可交互的 Web App
- 運用 AI 協作工具將需求轉成具體的實作與修正流程
- 了解如何透過 issue、branch、commit 與 PR 來管理開發工作
- 學習在 UI 設計中考慮明暗模式與可讀性
- 體驗把需求拆小、逐步驗證，並持續調整細節的開發方式
