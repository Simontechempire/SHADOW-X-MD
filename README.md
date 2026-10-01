<div align="center">

# 🌑 SHADOW-X-MD

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

<table style="font-weight: 300; width: 100%;">
  <tr>
    <td>📱 <strong>Phone-Based Pairing</strong></td>
    <td style="color: #666;">8-digit code authentication without QR codes</td>
  </tr>
  <tr>
    <td>⚡ <strong>Express.js Backend</strong></td>
    <td style="color: #666;">Fast and lightweight web server</td>
  </tr>
  <tr>
    <td>🎨 <strong>HTML Dashboard</strong></td>
    <td style="color: #666;">Intuitive management interface</td>
  </tr>
  <tr>
    <td>☁️ <strong>Cloud Ready</strong></td>
    <td style="color: #666;">Render & Railway deployment support</td>
  </tr>
  <tr>
    <td>🤖 <strong>WhatsApp Web.js</strong></td>
    <td style="color: #666;">Full WhatsApp automation capabilities</td>
  </tr>
  <tr>
    <td>🔒 <strong>Secure Authentication</strong></td>
    <td style="color: #666;">Phone number verification with pairing codes</td>
  </tr>
</table>

---

## 👥 Organization Details

| Field | Value |
|-------|-------|
| **Organization** | Simon Tech Inc |
| **Owner Contact** | +234-807-156-9915 |
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

Access the bot at **`http://localhost:3000`**

---

## 📡 Pairing Your WhatsApp Account

1. Navigate to `http://localhost:3000/pair`
2. A unique pairing code will be generated
3. Enter your WhatsApp phone number
4. Input the pairing code
5. Click "Connect WhatsApp"

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/pairing-code` | Generate a new pairing code |
| `POST` | `/api/pair-phone` | Pair a phone number |
| `GET` | `/api/pairing-status` | Check current pairing status |
| `GET` | `/health` | Health check endpoint |

### Example Request

```bash
curl -X POST http://localhost:3000/api/pair-phone \
  -H "Content-Type: application/json" \
  -d '{"phoneNumber": "2348071569915", "pairingCode": "12345678"}'
```

---

## 🤖 Bot Commands

| Command | Response |
|---------|----------|
| `hello` | Greeting message |
| `owner` | Owner information |
| `status` | Bot operational status |
| `help` | Available commands list |

---

## 📁 Project Structure

```
SHADOW-X-MD/
├── 📂 public/
│   ├── 📄 index.html          (Landing page)
│   ├── 📄 pair.html           (Pairing interface)
│   ├── 📄 dashboard.html      (Management dashboard)
│   ├── 🎨 styles.css          (Global styles)
│   └── 🎨 dashboard.css       (Dashboard styles)
├── 📂 routes/
│   ├── 📄 pairing.js          (Pairing logic)
│   └── 📄 bot.js              (Bot commands)
├── 📄 index.js                (Main entry point)
├── 📄 package.json
├── 📄 .env.example
├── 📄 .gitignore
└── 📄 README.md
```

---

## ☁️ Deployment

### Deploy to Render

1. Connect your GitHub repository
2. Create a new **Web Service**
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Node version: **18.x**
6. Add `.env` environment variables

### Deploy to Railway

1. Connect your GitHub repository
2. Railway auto-detects Node.js
3. Set Node version: **18.x**
4. Start command: `npm start`
5. Configure environment variables from `.env`

---

## 🛠️ Environment Variables

Create a `.env` file based on `.env.example`:

```bash
PORT=3000
WHATSAPP_SESSION_NAME=shadow-x-session
NODE_ENV=production
```

---

## 📞 Support & Contact

For issues, questions, or contributions:

- **Organization:** Simon Tech Inc
- **Status:** Active Development
- **Support:** Contact via owner information above

---

## 📜 License

<p style="font-weight: 300; color: #666;">
  This project is licensed under the <strong>ISC License</strong>
</p>

---

<div align="center" style="margin-top: 40px;">

**[⬆ Back to Top](#-shadow-x-md)**

<p style="font-weight: 300; color: #999; font-size: 12px;">
  Made with ❤️ by Simon Tech Empire
</p>

</div>
