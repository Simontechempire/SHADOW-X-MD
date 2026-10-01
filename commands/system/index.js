// System Commands

const system = {
  sysinfo: {
    description: 'Get system information',
    usage: '!sysinfo',
    category: 'SYSTEM',
    execute: async (args) => {
      return {
        success: true,
        response: `🖥️ System info: Node.js running on SHADOW-X-MD server.`
      };
    }
  },

  logs: {
    description: 'View recent logs',
    usage: '!logs',
    category: 'SYSTEM',
    execute: async (args) => {
      return {
        success: true,
        response: '📋 System logs feature coming soon!'
      };
    }
  }
};

module.exports = system;
