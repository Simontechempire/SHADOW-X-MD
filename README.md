# SHADOW-X-MD

WhatsApp Bot created by Simon Tech Inc.

## Features

- Phone number based pairing with 8-digit code authentication
- No QR code required
- Express.js web server
- HTML dashboard
- Ready for Render and Railway deployment
- WhatsApp Web.js integration

## Owner Information

- **Organization:** Simon Tech Inc
- **Owner Phone:** 2348071569915
- **Founder:** 2349166265317
- **Creator:** 238122029123

## Installation

```bash
npm install
```

## Configuration

1. Copy `.env.example` to `.env`
2. Update environment variables with your configuration

```bash
cp .env.example .env
```

## Running Locally

```bash
npm start
```

The bot will run on `http://localhost:3000`

## Pairing Your Device

1. Navigate to `http://localhost:3000/pair`
2. A pairing code will be generated
3. Enter your WhatsApp phone number
4. Enter the pairing code
5. Click "Connect WhatsApp"

## API Endpoints

### Generate Pairing Code
```
GET /api/pairing-code
```

### Pair Phone Number
```
POST /api/pair-phone
Body: { "phoneNumber": "2348071569915", "pairingCode": "12345678" }
```

### Get Pairing Status
```
GET /api/pairing-status
```

### Health Check
```
GET /health
```

## Bot Commands

- `hello` - Bot responds with greeting
- `owner` - Shows owner information
- `status` - Shows bot status
- `help` - Shows available commands

## Deployment on Render

1. Connect your GitHub repository
2. Create a new Web Service
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Set Node version to 18.x
6. Add environment variables from `.env`

## Deployment on Railway

1. Connect your GitHub repository
2. Railway will detect Node.js project
3. Set Node version to 18.x
4. Start Command: `npm start`
5. Add environment variables from `.env`

## File Structure

```
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
└── README.md
```

## Support

For issues or questions, contact Simon Tech Inc.

## License

ISC
