const express = require('express');
const router = express.Router();

const ownerInfo = {
  organization: 'Simon Tech Inc',
  ownerPhone: '2348071569915',
  founder: '2349166265317',
  creator: '238122029123'
};

// Handle bot commands
router.post('/command', (req, res) => {
  const { command } = req.body;

  if (!command) {
    return res.status(400).json({
      success: false,
      error: 'Command is required.'
    });
  }

  const text = command.toLowerCase().trim();
  let response = '';

  if (text === 'hello' || text === 'hi') {
    response = 'Hello! I am SHADOW-X-MD, your WhatsApp bot.';
  } else if (text === 'owner') {
    response = `Owner: ${ownerInfo.organization}\nOwner Phone: ${ownerInfo.ownerPhone}\nFounder: ${ownerInfo.founder}\nCreator: ${ownerInfo.creator}`;
  } else if (text === 'status') {
    response = 'SHADOW-X-MD is online and active.';
  } else if (text === 'help') {
    response = 'Available commands:\n- hello\n- owner\n- status\n- help';
  } else {
    response = 'Unknown command. Type "help" for available commands.';
  }

  res.json({
    success: true,
    command,
    response
  });
});

// Get owner info
router.get('/owner', (req, res) => {
  res.json({
    success: true,
    owner: ownerInfo
  });
});

module.exports = router;
