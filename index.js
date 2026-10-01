const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Client, LocalAuth, Events } = require('whatsapp-web.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let pairingCode = null;
let botStatus = 'initializing';
let connectedPhone = null;

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

function generatePairingCode() {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
}

client.on(Events.QR_RECEIVED, async () => {
  try {
    pairingCode = generatePairingCode();
    botStatus = 'waiting_for_pairing';
    console.log(`\n📱 PAIRING CODE: ${pairingCode}`);
    console.log('Use the pairing page to connect the phone number and connect WhatsApp.\n');
  } catch (error) {
    console.error('Error generating pairing code:', error);
  }
});

client.on(Events.READY, () => {
  console.log('WhatsApp client is ready!');
  botStatus = 'connected';
  pairingCode = null;
});

client.on(Events.AUTHENTICATED, () => {
  console.log('WhatsApp authenticated successfully!');
  botStatus = 'authenticated';
});

client.on(Events.AUTH_FAILURE, () => {
  console.log('Authentication failed. Please try again.');
  botStatus = 'auth_failed';
});

client.on(Events.DISCONNECTED, () => {
  console.log('WhatsApp client disconnected');
  botStatus = 'disconnected';
  pairingCode = null;
});

client.on(Events.MESSAGE_RECEIVED, async (msg) => {
  const text = msg.body.trim().toLowerCase();

  if (text === 'hello' || text === 'hi') {
    await msg.reply('Hello! I am SHADOW-X-MD, your WhatsApp bot.');
  }

  if (text === 'owner') {
    await msg.reply(
      'Owner: Simon Tech Inc\nOwner Phone: 2348071569915\nFounder: 2349166265317\nCreator: 238122029123'
    );
  }

  if (text === 'status') {
    await msg.reply('SHADOW-X-MD is online and active.');
  }

  if (text === 'help') {
    await msg.reply(
      'Available commands:\n- hello\n- owner\n- status\n- help'
    );
  }
});

client.initialize();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/pair', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pair.html'));
});

app.get('/api/pairing-code', (req, res) => {
  pairingCode = generatePairingCode();
  botStatus = 'waiting_for_pairing';

  res.json({
    success: true,
    pairingCode,
    message: 'Pairing code generated. User can now connect via the WhatsApp pairing page.'
  });
});

app.get('/api/pairing-status', (req, res) => {
  res.json({
    status: botStatus,
    pairingCode,
    connectedPhone
  });
});

app.post('/api/pair-phone', (req, res) => {
  const { phoneNumber, pairingCode: userCode } = req.body;

  if (!phoneNumber || !userCode) {
    return res.status(400).json({
      success: false,
      error: 'Phone number and pairing code are required.'
    });
  }

  if (userCode !== pairingCode) {
    return res.status(401).json({
      success: false,
      error: 'Invalid pairing code.'
    });
  }

  connectedPhone = phoneNumber;
  botStatus = 'connected';
  pairingCode = null;

  res.json({
    success: true,
    message: 'Phone paired successfully!',
    phone: phoneNumber
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: botStatus,
    service: 'SHADOW-X-MD',
    pairingCode,
    connectedPhone,
    timestamp: new Date().toISOString()
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`\n🚀 SHADOW-X-MD Bot is running on port ${PORT}`);
  console.log(`🌐 Dashboard available at http://localhost:${PORT}`);
  console.log(`📱 Pairing page available at http://localhost:${PORT}/pair`);
  console.log(`👤 Owner: Simon Tech Inc.`);
  console.log(`⏰ Started at: ${new Date().toISOString()}\n`);
});

module.exports = app;
