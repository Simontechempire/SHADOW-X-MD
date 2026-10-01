// Shortener Commands
const axios = require('axios');

const shortener = {
  short: {
    description: 'Shorten a URL',
    usage: '!short <url>',
    category: 'SHORTENER',
    execute: async (args) => {
      if (!args[0]) {
        return { success: false, error: 'Please provide a URL' };
      }
      try {
        const url = args[0];
        const response = await axios.post('https://tinyurl.com/api/create.php', null, {
          params: { url: url }
        });
        
        return {
          success: true,
          response: `🔗 Shortened URL: ${response.data}`
        };
      } catch (error) {
        return { success: false, error: 'URL shortening failed: ' + error.message };
      }
    }
  },

  expand: {
    description: 'Expand a short URL',
    usage: '!expand <short-url>',
    category: 'SHORTENER',
    execute: async (args) => {
      if (!args[0]) {
        return { success: false, error: 'Please provide a short URL' };
      }
      try {
        const shortUrl = args[0];
        const response = await axios.head(shortUrl, { maxRedirects: 0 });
        const expandedUrl = response.headers.location || shortUrl;
        
        return {
          success: true,
          response: `📎 Expanded URL: ${expandedUrl}`
        };
      } catch (error) {
        if (error.response && error.response.headers.location) {
          return {
            success: true,
            response: `📎 Expanded URL: ${error.response.headers.location}`
          };
        }
        return { success: false, error: 'URL expansion failed: ' + error.message };
      }
    }
  }
};

module.exports = shortener;