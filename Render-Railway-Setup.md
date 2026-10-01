# Deployment Guide: Render & Railway

## Deployment on Render

### Step 1: Connect Repository
1. Go to [render.com](https://render.com)
2. Sign in with GitHub
3. Click "New +" and select "Web Service"
4. Connect your GitHub repository

### Step 2: Configure Build Settings
- **Name:** shadow-x-md
- **Runtime:** Node
- **Build Command:** `npm install`
- **Start Command:** `npm start`

### Step 3: Set Environment Variables
Add the following in the "Environment" section:
- `PORT=3000`
- `NODE_ENV=production`
- `BOT_NAME=SHADOW-X-MD`
- `BOT_PREFIX=!`
- `OWNER_NAME=Simon Tech Inc`
- `OWNER_PHONE=2348071569915`
- `FOUNDER_PHONE=2349166265317`
- `CREATOR_PHONE=238122029123`

### Step 4: Deploy
Click "Create Web Service" and Render will automatically deploy your app.

### Dashboard Access
Once deployed, access your bot at:
- Home: `https://your-render-url.onrender.com/`
- Pairing: `https://your-render-url.onrender.com/pair`
- Dashboard: `https://your-render-url.onrender.com/dashboard`

---

## Deployment on Railway

### Step 1: Connect Repository
1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. Click "New Project" and select "Deploy from GitHub repo"
4. Connect your SHADOW-X-MD repository

### Step 2: Auto-detection
Railway will automatically detect Node.js and install dependencies.

### Step 3: Set Environment Variables
1. Go to Variables tab
2. Add the following:
   - `PORT=3000`
   - `NODE_ENV=production`
   - `BOT_NAME=SHADOW-X-MD`
   - `BOT_PREFIX=!`
   - `OWNER_NAME=Simon Tech Inc`
   - `OWNER_PHONE=2348071569915`
   - `FOUNDER_PHONE=2349166265317`
   - `CREATOR_PHONE=238122029123`

### Step 4: Set Start Command (if needed)
1. Go to Deploy settings
2. Ensure Start Command is: `npm start`

### Step 5: Deploy
Railway will automatically deploy when you push to GitHub.

### Dashboard Access
Once deployed, access your bot at:
- Home: `https://your-railway-url.up.railway.app/`
- Pairing: `https://your-railway-url.up.railway.app/pair`
- Dashboard: `https://your-railway-url.up.railway.app/dashboard`

---

## Monitoring

### Health Check Endpoint
Both Render and Railway can use this endpoint to monitor your bot:

```
GET /health
```

Response:
```json
{
  "status": "connected",
  "service": "SHADOW-X-MD",
  "pairingCode": null,
  "connectedPhone": "2348071569915",
  "timestamp": "2026-10-01T18:27:24Z"
}
```

### Logs
- **Render:** View in "Logs" tab
- **Railway:** View in "Logs" tab

---

## Troubleshooting

### Bot won't start
- Check environment variables are set correctly
- Review logs for errors
- Ensure Node version is 18.x or higher

### Pairing fails
- Verify WhatsApp account is active
- Check phone number format (include country code)
- Ensure pairing code matches

### Connection drops
- Check internet connection stability
- Review deployment logs
- Restart the service

---

## Support

For issues with Render: [Render Documentation](https://render.com/docs)
For issues with Railway: [Railway Documentation](https://docs.railway.app)
For bot issues: Contact Simon Tech Inc
