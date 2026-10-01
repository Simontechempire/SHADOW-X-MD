// Utility Commands

const utility = {
  reminder: {
    description: 'Set a reminder',
    usage: '!reminder <time> <message>',
    category: 'UTILITY',
    execute: async (args) => {
      return {
        success: true,
        response: '⏰ Reminder feature coming soon!'
      };
    }
  },

  notes: {
    description: 'Save a note',
    usage: '!notes <message>',
    category: 'UTILITY',
    execute: async (args) => {
      if (!args.length) {
        return { success: false, error: 'Please provide a note' };
      }
      return {
        success: true,
        response: `📝 Saved note: ${args.join(' ')}`
      };
    }
  },

  qr: {
    description: 'Generate QR code',
    usage: '!qr <text>',
    category: 'UTILITY',
    execute: async (args) => {
      if (!args.length) {
        return { success: false, error: 'Please provide text' };
      }
      return {
        success: true,
        response: `📱 QR code for "${args.join(' ')}" coming soon!`
      };
    }
  }
};

module.exports = utility;
