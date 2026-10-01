// Tools Commands
const axios = require('axios');
const QRCode = require('qrcode');

const tools = {
  qrcode: {
    description: 'Generate QR code',
    usage: '!qrcode <text>',
    category: 'TOOLS',
    execute: async (args) => {
      if (!args.length) {
        return { success: false, error: 'Please provide text for QR code' };
      }
      try {
        const text = args.join(' ');
        const qrDataUrl = await QRCode.toDataURL(text);
        return {
          success: true,
          response: `📱 QR Code generated for: ${text}`,
          qrCode: qrDataUrl
        };
      } catch (error) {
        return { success: false, error: 'QR code generation failed: ' + error.message };
      }
    }
  },

  calculator: {
    description: 'Calculate math expression',
    usage: '!calc <expression>',
    category: 'TOOLS',
    execute: async (args) => {
      if (!args.length) {
        return { success: false, error: 'Please provide a math expression' };
      }
      try {
        const result = eval(args.join(''));
        return {
          success: true,
          response: `🧮 ${args.join('')} = ${result}`
        };
      } catch (error) {
        return { success: false, error: 'Invalid expression' };
      }
    }
  },

  encode: {
    description: 'Encode text to Base64',
    usage: '!encode <text>',
    category: 'TOOLS',
    execute: async (args) => {
      if (!args.length) {
        return { success: false, error: 'Please provide text to encode' };
      }
      const text = args.join(' ');
      const encoded = Buffer.from(text).toString('base64');
      return {
        success: true,
        response: `🔐 Encoded: ${encoded}`
      };
    }
  },

  decode: {
    description: 'Decode Base64 text',
    usage: '!decode <text>',
    category: 'TOOLS',
    execute: async (args) => {
      if (!args.length) {
        return { success: false, error: 'Please provide text to decode' };
      }
      try {
        const text = args.join(' ');
        const decoded = Buffer.from(text, 'base64').toString('utf-8');
        return {
          success: true,
          response: `🔑 Decoded: ${decoded}`
        };
      } catch (error) {
        return { success: false, error: 'Invalid Base64 text' };
      }
    }
  }
};

module.exports = tools;