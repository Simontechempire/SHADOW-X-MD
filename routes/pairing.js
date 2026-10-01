const express = require('express');
const router = express.Router();

let pairingCode = null;
let botStatus = 'initializing';
let connectedPhone = null;

// Generate 8-digit pairing code
function generatePairingCode() {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
}

// Generate new pairing code
router.get('/code', (req, res) => {
  pairingCode = generatePairingCode();
  botStatus = 'waiting_for_pairing';

  console.log(`📱 New pairing code generated: ${pairingCode}`);

  res.json({
    success: true,
    pairingCode,
    message: 'Pairing code generated. Enter your phone number and this code to connect WhatsApp.'
  });
});

// Pair phone number with code
router.post('/pair', (req, res) => {
  const { phoneNumber, pairingCode: userCode } = req.body;

  if (!phoneNumber || !userCode) {
    return res.status(400).json({
      success: false,
      error: 'Phone number and pairing code are required.'
    });
  }

  if (!pairingCode) {
    return res.status(400).json({
      success: false,
      error: 'No active pairing code. Please generate a new one.'
    });
  }

  if (userCode !== pairingCode) {
    return res.status(401).json({
      success: false,
      error: 'Invalid pairing code. Please try again.'
    });
  }

  connectedPhone = phoneNumber;
  botStatus = 'connected';
  pairingCode = null;

  console.log(`✅ Phone ${phoneNumber} paired successfully!`);

  res.json({
    success: true,
    message: 'Phone paired successfully!',
    phone: phoneNumber,
    status: 'connected'
  });
});

// Get pairing status
router.get('/status', (req, res) => {
  res.json({
    status: botStatus,
    pairingCode: pairingCode || null,
    connectedPhone: connectedPhone || null,
    timestamp: new Date().toISOString()
  });
});

// Disconnect phone
router.post('/disconnect', (req, res) => {
  connectedPhone = null;
  botStatus = 'disconnected';
  pairingCode = null;

  console.log('📵 WhatsApp disconnected');

  res.json({
    success: true,
    message: 'Disconnected successfully.'
  });
});

module.exports = router;
