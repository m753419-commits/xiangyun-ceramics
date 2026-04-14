# 翔運工藝陶瓷有限公司 - 企業官網

## 🏢 關於網站

這是一個專業、美觀的陶瓷製造企業官方網站，展現翔運工藝陶瓷有限公司的品牌形象和七大工藝系列產品。

---

## 📁 檔案結構

```
/home/isaac/workspace/
├── index.html          # 首頁 HTML
├── css/
│   └── style.css       # 主樣式表（完整響應式設計）
├── js/
│   └── main.js         # 互動功能與動畫
├── images/             # 圖片資源目錄
└── README.md           # 本說明文件
```

---

## ✨ 網站功能

### 1. **導航欄**
- 固定頂部導航
- 手機版漢堡選單
- 平滑滾動到對應區段
- 自動標記當前頁面位置

### 2. **Hero 區域**
- 動態漸層背景
- 品牌 Slogan「誠為貴 · 信為本」
- 公司中英文名稱展示

### 3. **關於我們**
- 公司簡介
- 統計數據（年資、市場覆蓋、工藝系列）
- 圖片展示區

### 4. **產品系列**
- 8 個卡片展示主要產品
- 七大工藝系列 + 日銷陶瓷/玻璃制品
- 懸停動畫效果
- 「雙系列」特色標識

### 5. **展示中心**
- 網格布局圖片展示區
- 響應式圖片大小調整

### 6. **聯絡我們**
- 聯絡資訊顯示
- 聯絡表單（可整合 Telegram Bot API）
- 工廠地址、電話、市場範圍

### 7. **Footer**
- 品牌資訊
- 快速連結
- 版權聲明

---

## 🎨 設計特色

### 配色方案
- **主色**: #8B4513 (陶土棕)
- **次要色**: #D2691E (紅銅色)
- **輔助色**: #CD853F (浅棕色)
- **背景**: #FFF8F0 (米白色)

### 字體
- **主字體**: Noto Serif TC (Google Fonts)
- **備用**: Microsoft JhengHei

### 互動效果
- ✅ 淡入動畫
- ✅ 懸停提升效果
- ✅ 數字計數動畫
- ✅ 響應式過渡

---

## 🚀 如何發佈給別人看

### 方法一：GitHub Pages（推薦）

```bash
# 1. 建立 GitHub 倉庫並上傳
cd /home/isaac/workspace
git init
git add .
git commit -m "Initial commit: Xiang Yun Ceramics website"

# 2. 推送到 GitHub
# （需要先設定 GitHub 認證）
git remote add origin https://github.com/YOUR_USERNAME/xiangyun-ceramics.git
git push -u origin main

# 3. 在 GitHub Settings → Pages 啟用
# 訪問網址：https://YOUR_USERNAME.github.io/xiangyun-ceramics/
```

### 方法二：Netlify（零配置）

1. 將整個 `/home/isaac/workspace` 資料夾拖放到 [Netlify Drop](https://app.netlify.com/drop)
2. 自動生成公開網址
3. 可自訂網域名稱

### 方法三：Vercel

```bash
# 安裝 Vercel CLI
npm i -g vercel

# 部署
cd /home/isaac/workspace
vercel
```

### 方法四：本地測試

```bash
# 使用 Python 內建伺服器
cd /home/isaac/workspace
python3 -m http.server 8080

# 訪問：http://localhost:8080
```

---

## 🖼️ 替換真實圖片

目前使用顏色占位符，您可以：

1. 將圖片放入 `images/` 目錄
2. 修改 `index.html` 中的 placeholder

例如：
```html
<div class="image-placeholder">
    <img src="images/company-photo.jpg" alt="翔運工廠照片">
</div>
```

---

## 📱 響應式支援

- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (< 768px)
- ✅ Small mobile (< 480px)

---

## 🔧 後續可擴展功能

- [ ] 多語言切換（中文/英文）
- [ ] 即時客服系統
- [ ] 產品搜尋功能
- [ ] PDF 樣品冊下載
- [ ] 訂單詢價系統
- [ ] Google Analytics 整合
- [ ] SEO 優化擴充

---

## 📞 聯絡資訊

**翔運工藝陶瓷有限公司**
- 工廠地址：廣東省揭陽市揭東區新亨鎮碩聯村牛圩開發區坪埔路段南側中段
- 電話/傳真：0663-3470520
- 市場覆蓋：日本、美國、歐洲、南美、澳大利亞等 40+ 國家

---

## 📄 授權

© 2026 翔運工藝陶瓷有限公司。All Rights Reserved.

---

## 👨‍💻 技術棧

- HTML5 + CSS3 + Vanilla JavaScript
- Google Fonts (Noto Serif TC)
- 完全響應式設計
- 無外部框架依賴

---

**最後更新**: 2026 年 4 月 14 日
