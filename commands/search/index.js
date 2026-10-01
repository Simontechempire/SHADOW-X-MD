// Search Commands
const axios = require('axios');

const search = {
  google: {
    description: 'Search Google',
    usage: '!google <query>',
    category: 'SEARCH',
    execute: async (args) => {
      if (!args.length) {
        return { success: false, error: 'Please provide a search query' };
      }
      try {
        const query = args.join(' ');
        const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
          params: {
            q: query,
            key: process.env.GOOGLE_API_KEY,
            cx: process.env.GOOGLE_SEARCH_CX
          }
        });
        
        if (response.data.items && response.data.items.length > 0) {
          const results = response.data.items.slice(0, 3).map((item, idx) => 
            `${idx + 1}. ${item.title}\n${item.link}`
          ).join('\n\n');
          return {
            success: true,
            response: `🔍 Google Search Results for "${query}":\n\n${results}`
          };
        }
        return { success: false, error: 'No results found' };
      } catch (error) {
        return { success: false, error: 'Search failed: ' + error.message };
      }
    }
  },

  weather: {
    description: 'Get weather information',
    usage: '!weather <city>',
    category: 'SEARCH',
    execute: async (args) => {
      if (!args.length) {
        return { success: false, error: 'Please provide a city name' };
      }
      try {
        const city = args.join(' ');
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: city,
            appid: process.env.OPENWEATHER_API_KEY,
            units: 'metric'
          }
        });
        
        const data = response.data;
        return {
          success: true,
          response: `🌤️ Weather for ${data.name}, ${data.sys.country}:\nTemp: ${data.main.temp}°C\nCondition: ${data.weather[0].main}\nHumidity: ${data.main.humidity}%`
        };
      } catch (error) {
        return { success: false, error: 'Weather fetch failed: ' + error.message };
      }
    }
  },

  wikipedia: {
    description: 'Search Wikipedia',
    usage: '!wikipedia <query>',
    category: 'SEARCH',
    execute: async (args) => {
      if (!args.length) {
        return { success: false, error: 'Please provide a search query' };
      }
      try {
        const query = args.join(' ');
        const response = await axios.get('https://en.wikipedia.org/w/api.php', {
          params: {
            action: 'query',
            format: 'json',
            srsearch: query,
            list: 'search'
          }
        });
        
        if (response.data.query.search.length > 0) {
          const result = response.data.query.search[0];
          return {
            success: true,
            response: `📖 Wikipedia: ${result.title}\n${result.snippet.replace(/<[^>]+>/g, '')}`
          };
        }
        return { success: false, error: 'No Wikipedia results found' };
      } catch (error) {
        return { success: false, error: 'Wikipedia search failed: ' + error.message };
      }
    }
  }
};

module.exports = search;