// Religion Commands
const axios = require('axios');

const religion = {
  quran: {
    description: 'Get Quran verse',
    usage: '!quran <chapter:verse>',
    category: 'RELIGION',
    execute: async (args) => {
      if (!args.length) {
        return { success: false, error: 'Usage: !quran <chapter:verse> (e.g., 1:1)' };
      }
      try {
        const verse = args[0];
        const response = await axios.get(`https://api.alquran.cloud/v1/ayah/${verse}/en.asad`);
        
        const data = response.data.data;
        return {
          success: true,
          response: `📖 Quran ${data.surah.name} - Verse ${data.ayahNumber}:\n${data.text}`
        };
      } catch (error) {
        return { success: false, error: 'Quran fetch failed: ' + error.message };
      }
    }
  },

  bible: {
    description: 'Get Bible verse',
    usage: '!bible <book chapter:verse>',
    category: 'RELIGION',
    execute: async (args) => {
      if (!args.length) {
        return { success: false, error: 'Usage: !bible <book chapter:verse> (e.g., John 3:16)' };
      }
      try {
        const query = args.join(' ');
        const response = await axios.get('https://bible-api.com/', {
          params: { passage: query }
        });
        
        const data = response.data;
        return {
          success: true,
          response: `📜 Bible - ${data.reference}:\n${data.text}`
        };
      } catch (error) {
        return { success: false, error: 'Bible fetch failed: ' + error.message };
      }
    }
  }
};

module.exports = religion;