// AI Commands
const axios = require('axios');

const ai = {
  gpt: {
    description: 'Talk to AI (GPT)',
    usage: '!gpt <query>',
    category: 'AI',
    execute: async (args) => {
      if (!args.length) {
        return { success: false, error: 'Please provide a query' };
      }
      try {
        const query = args.join(' ');
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: query }],
          max_tokens: 150
        }, {
          headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
          }
        });
        
        const reply = response.data.choices[0].message.content;
        return {
          success: true,
          response: `🤖 AI Response to "${query}":\n${reply}`
        };
      } catch (error) {
        return { success: false, error: 'AI API error: ' + error.message };
      }
    }
  },

  translate: {
    description: 'Translate text',
    usage: '!translate <language> <text>',
    category: 'AI',
    execute: async (args) => {
      if (args.length < 2) {
        return { success: false, error: 'Usage: !translate <language> <text>' };
      }
      try {
        const language = args[0];
        const text = args.slice(1).join(' ');
        const response = await axios.post('https://api.mymemory.translated.net/get', null, {
          params: {
            q: text,
            langpair: `en|${language}`
          }
        });
        
        const translated = response.data.responseData.translatedText;
        return {
          success: true,
          response: `🌐 Translation to ${language}:\n${translated}`
        };
      } catch (error) {
        return { success: false, error: 'Translation failed: ' + error.message };
      }
    }
  },

  summarize: {
    description: 'Summarize text',
    usage: '!summarize <text>',
    category: 'AI',
    execute: async (args) => {
      if (!args.length) {
        return { success: false, error: 'Please provide text to summarize' };
      }
      return {
        success: true,
        response: `📝 Text summarization requires GPT API integration.`
      };
    }
  },

  analyze: {
    description: 'Analyze sentiment or content',
    usage: '!analyze <text>',
    category: 'AI',
    execute: async (args) => {
      if (!args.length) {
        return { success: false, error: 'Please provide text to analyze' };
      }
      return {
        success: true,
        response: `🔍 Sentiment analysis coming soon!`
      };
    }
  }
};

module.exports = ai;