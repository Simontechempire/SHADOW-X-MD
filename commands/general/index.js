// General Commands

const general = {
  hello: {
    description: 'Greet the bot',
    usage: '!hello',
    category: 'GENERAL',
    execute: async (args) => {
      return {
        success: true,
        response: '👋 Hello! I am SHADOW-X-MD, your WhatsApp bot. How can I help you today?'
      };
    }
  },

  ping: {
    description: 'Check bot latency',
    usage: '!ping',
    category: 'GENERAL',
    execute: async (args) => {
      const startTime = Date.now();
      const latency = Date.now() - startTime;
      return {
        success: true,
        response: `🏓 Pong! Latency: ${latency}ms`
      };
    }
  },

  help: {
    description: 'Show available commands',
    usage: '!help [category]',
    category: 'GENERAL',
    execute: async (args) => {
      if (args[0]) {
        return {
          success: true,
          response: `📚 Commands in ${args[0]} category. Use !<category> <command> to execute.`
        };
      }
      return {
        success: true,
        response: `📚 Available categories:\n1. 18+\n2. AI\n3. ANONYMOUS\n4. AUDIO-EDIT\n5. CHANNEL\n6. CODING\n7. COMMUNITY\n8. CONVERTER\n9. DOWNLOADER\n10. EDUCATION\n11. EPHOTO\n12. GAME\n13. GENERAL\n14. GPT\n15. GROUP\n16. MODED-APK\n17. MOVIE\n18. NEWS\n19. OWNER\n20. PHOTOFUNIA\n21. PRIVACY\n22. RELIGION\n23. SEARCH\n24. SETTINGS\n25. SHORTENER\n26. SPORTS\n27. STALKER\n28. STICKER\n29. SYSTEM\n30. TOOLS\n31. UPLOADER\n32. UTILITY\n33. WA-BUSINESS`
      };
    }
  },

  about: {
    description: 'Get bot information',
    usage: '!about',
    category: 'GENERAL',
    execute: async (args) => {
      return {
        success: true,
        response: `🤖 SHADOW-X-MD Bot v1.0.0\nCreated by: Simon Tech Inc\nOwner: 2348071569915\nFounder: 2349166265317\nCreator: 238122029123`
      };
    }
  },

  time: {
    description: 'Get current time',
    usage: '!time',
    category: 'GENERAL',
    execute: async (args) => {
      const now = new Date();
      return {
        success: true,
        response: `🕐 Current time: ${now.toLocaleTimeString()}`
      };
    }
  }
};

module.exports = general;
