// Settings Commands

const settings = {
  prefix: {
    description: 'Change command prefix',
    usage: '!prefix <new prefix>',
    category: 'SETTINGS',
    adminOnly: true,
    execute: async (args) => {
      if (!args[0]) {
        return { success: false, error: 'Please provide a new prefix' };
      }
      return {
        success: true,
        response: `✅ Prefix changed to "${args[0]}"`
      };
    }
  },

  language: {
    description: 'Change bot language',
    usage: '!language <language>',
    category: 'SETTINGS',
    execute: async (args) => {
      if (!args[0]) {
        return { success: false, error: 'Please provide a language' };
      }
      return {
        success: true,
        response: `🌐 Language changed to ${args[0]}`
      };
    }
  },

  notifications: {
    description: 'Toggle notifications',
    usage: '!notifications <on/off>',
    category: 'SETTINGS',
    execute: async (args) => {
      const status = args[0] || 'on';
      return {
        success: true,
        response: `🔔 Notifications ${status}`
      };
    }
  }
};

module.exports = settings;
