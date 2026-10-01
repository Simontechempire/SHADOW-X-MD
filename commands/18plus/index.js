// 18+ Commands

const adult = {
  nsfw: {
    description: '18+ content (Restricted)',
    usage: '!nsfw',
    category: '18+',
    restricted: true,
    ageRestricted: true,
    execute: async (args) => {
      return {
        success: true,
        response: `⚠️ This command is restricted to adults only. Please verify your age first.`
      };
    }
  }
};

module.exports = adult;
