<div align="center">

# 🌑 SHADOW-X-MD

<img src="assets/shadow-x-profile.svg" alt="SHADOW-X-MD bot profile" width="220" height="220" />

<p style="font-weight: 300; color: #666;">
  <i>Advanced WhatsApp Bot with Phone Pairing Authentication</i>
</p>

![Made with Node.js](https://img.shields.io/badge/Made%20with-Node.js-green?style=flat-square&logo=node.js)
![License: ISC](https://img.shields.io/badge/License-ISC-blue?style=flat-square)
![Version 1.0](https://img.shields.io/badge/Version-1.0-orange?style=flat-square)

<p style="font-weight: 300; font-size: 14px; color: #888;">
  Created by <strong>Simon Tech Inc</strong>
</p>

---

</div>

## ✨ Features

<ul>
  <li>📱 Phone-based pairing with 8-digit code authentication</li>
  <li>⚡ Express.js web server</li>
  <li>🎨 HTML dashboard</li>
  <li>☁️ Render and Railway deployment support</li>
  <li>🤖 WhatsApp Web.js integration</li>
  <li>🔒 Secure phone verification flow</li>
</ul>

---

## 👥 Owner Information

| Field | Value |
|-------|-------|
| **Organization** | Simon Tech Inc |
| **Owner Phone** | +234-807-156-9915 |
| **Founder** | +234-916-626-5317 |
| **Creator** | +238-122-029-123 |

---

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Configuration

```bash
cp .env.example .env
# Edit .env with your settings
```

### Run Locally

```bash
npm start
```

Open: `http://localhost:3000`

---

## 📡 Pairing Your Device

1. Navigate to `http://localhost:3000/pair`
2. Generate a pairing code
3. Enter your WhatsApp phone number
4. Enter the pairing code
5. Click "Connect WhatsApp"

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/pairing-code` | Generate a pairing code |
| `POST` | `/api/pair-phone` | Pair a phone number |
| `GET` | `/api/pairing-status` | Check pairing state |
| `GET` | `/health` | Health check |

---

## 🤖 Bot Commands

| Command | Meaning |
|---------|---------|
| `hello` | Greeting |
| `owner` | Show owner details |
| `status` | Show bot status |
| `help` | Show available commands |

---

## ☁️ Deployment

### Render

1. Connect your GitHub repository
2. Create a new Web Service
3. Build command: `npm install`
4. Start command: `npm start`
5. Use Node 18.x
6. Add environment variables from `.env`

### Railway

1. Connect the repo
2. Railway detects Node.js project
3. Set Node version to `18.x`
4. Start command: `npm start`
5. Add your environment variables

---

## 📁 Project Structure

```text
SHADOW-X-MD/
├── public/
│   ├── index.html
│   ├── pair.html
│   ├── dashboard.html
│   ├── styles.css
│   └── dashboard.css
├── routes/
│   ├── pairing.js
│   └── bot.js
├── index.js
├── package.json
├── .env.example
├── .gitignore
├── README.md
└── assets/
    └── shadow-x-profile.svg
```

---

## 📞 Support

For issues or questions, contact Simon Tech Inc.

---

## 📜 License

This project is licensed under the ISC License.
