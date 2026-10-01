// News Commands
const axios = require('axios');

const news = {
  headlines: {
    description: 'Show latest headlines',
    usage: '!headlines',
    category: 'NEWS',
    execute: async (args) => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us',
            apiKey: process.env.NEWSAPI_KEY,
            pageSize: 5
          }
        });
        
        const headlines = response.data.articles.map((article, idx) => 
          `${idx + 1}. ${article.title}\nSource: ${article.source.name}`
        ).join('\n\n');
        
        return {
          success: true,
          response: `📰 Top Headlines:\n\n${headlines}`
        };
      } catch (error) {
        return { success: false, error: 'News fetch failed: ' + error.message };
      }
    }
  },

  sportsnews: {
    description: 'Show sports news',
    usage: '!sportsnews',
    category: 'NEWS',
    execute: async (args) => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'sports',
            apiKey: process.env.NEWSAPI_KEY,
            pageSize: 5,
            sortBy: 'publishedAt'
          }
        });
        
        const sportsNews = response.data.articles.map((article, idx) => 
          `${idx + 1}. ${article.title}\nSource: ${article.source.name}`
        ).join('\n\n');
        
        return {
          success: true,
          response: `🏆 Sports News:\n\n${sportsNews}`
        };
      } catch (error) {
        return { success: false, error: 'Sports news fetch failed: ' + error.message };
      }
    }
  }
};

module.exports = news;