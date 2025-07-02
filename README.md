# 📝 Resume Builder (React + CSS)

A clean, customizable, and ATS-optimized resume builder built using **React** and **pure CSS** — designed for developers, by a developer.

---

## 🚀 Features

- ✅ One-page printable layout
- ✅ Fully **ATS-compliant** (scored >95% with multiple scanners)
- ✅ Built with **pure React + CSS** (no frameworks like Tailwind)
- ✅ Download-ready PDF (via browser print)
- ✅ Responsive and minimal
- ✅ Resume content editable via JSON

---

## 📸 Preview

![Resume Screenshot](preview.png) <!-- Add your screenshot -->

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite)
- **Styling**: Pure CSS (no dependencies)
- **Export**: Print to PDF via `window.print()`

---

## 📂 Project Structure

```
resume-builder/
├── public/
├── src/
│   ├── components/
│   │   └── Resume.jsx      # Main resume component
│   ├── styles/
│   │   └── Resume.css      # Custom CSS styles
│   └── App.jsx             # Entry point
├── index.html
├── package.json
└── README.md
```

---

## 🧠 How It Works

- Resume data is stored in a JS object (`resumeData`) and passed to a React component.
- Sections like education, skills, experience, and projects are rendered dynamically.
- Dates are right-aligned with light gray styling for readability.
- A single button prints the page cleanly with all styles preserved.

---

## 🖨️ Export as PDF

To export your resume:

1. Click the `Download PDF` button.
2. Set print layout to **A4**.
3. Set margins to **0.5in**.
4. Uncheck "Headers and footers".
5. Save as PDF.

---

## ✅ ATS Optimization Tips

- Content is semantically structured using lists, headings, and plain text.
- Fonts are clean, no graphics, no tables — fully **parseable by ATS software**.
- Print-ready layout ensures no loss of structure in export.

🔍 Tested with:
- Jobscan
- ResumeWorded
- Teal HQ
- Resume.io (import testing)

📈 Average ATS score: **95–98%**

---

## 🔧 Setup Instructions

```bash
# Clone the repo
https://github.com/YOUR_USERNAME/resume-builder.git

# Install dependencies
npm install

# Run the app
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

---

## ✍️ Customize Your Resume

Open `Resume.jsx` and edit the `resumeData` object:

```js
const resumeData = {
  name: "Your Name",
  email: "you@example.com",
  experience: [...],
  skills: {...},
  projects: [...]
}
```

Make it yours!

---

## 📄 License

MIT License. Free for personal or commercial use. Attribution appreciated but not required.

---

## 🙌 Credits

Made with 💙 by [Himanshu Jha](https://github.com/Hymanshu-jha)

---

## 🌐 Contributing

Contributions welcome! If you have improvements (e.g. dark mode, export as .docx), feel free to fork and PR.

---
