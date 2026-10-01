// GPT Commands
const axios = require('axios');

const gpt = {
  ask: {
    description: 'Ask the GPT assistant',
    usage: '!ask <question>',
    category: 'GPT',
    execute: async (args) => {
      if (!args.length) {
        return { success: false, error: 'Please provide a question' };
      }
      try {
        const query = args.join(' ');
        // Using OpenAI API - requires API key in .env
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
        
        const answer = response.data.choices[0].message.content;
        return {
          success: true,
          response: `🤖 AI Response:\n${answer}`
        };
      } catch (error) {
        return {
          success: false,
          error: 'GPT API error: ' + error.message
        };
      }
    }
  },

  chat: {
    description: 'Chat with GPT assistant',
    usage: '!chat <message>',
    category: 'GPT',
    execute: async (args) => {
      if (!args.length) {
        return { success: false, error: 'Please provide a message' };
      }
      try {
        const message = args.join(' ');
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: message }],
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
          response: `💬 ${reply}`
        };
      } catch (error) {
        return {
          success: false,
          error: 'Chat API error: ' + error.message
        };
      }
    }
  }
};

module.exports = gpt;