// Downloader Commands
const axios = require('axios');

const downloader = {
  ytmp3: {
    description: 'Download YouTube video as MP3',
    usage: '!ytmp3 <url>',
    category: 'DOWNLOADER',
    execute: async (args) => {
      if (!args[0]) {
        return { success: false, error: 'Please provide a YouTube URL' };
      }
      try {
        // Using RapidAPI YouTube converter
        const response = await axios.get('https://youtube-mp36.p.rapidapi.com/dl', {
          params: { id: args[0] },
          headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
          }
        });
        
        return {
          success: true,
          response: `🎵 MP3 Download: ${response.data.title}\nLink: ${response.data.link}`
        };
      } catch (error) {
        return {
          success: false,
          error: 'Download failed: ' + error.message
        };
      }
    }
  },

  ytmp4: {
    description: 'Download YouTube video as MP4',
    usage: '!ytmp4 <url>',
    category: 'DOWNLOADER',
    execute: async (args) => {
      if (!args[0]) {
        return { success: false, error: 'Please provide a YouTube URL' };
      }
      return {
        success: true,
        response: `🎬 YouTube MP4 download requires premium API access.`
      };
    }
  },

  tiktok: {
    description: 'Download TikTok video',
    usage: '!tiktok <url>',
    category: 'DOWNLOADER',
    execute: async (args) => {
      if (!args[0]) {
        return { success: false, error: 'Please provide a TikTok URL' };
      }
      try {
        const response = await axios.get('https://tiktok-downloader-and-converter.p.rapidapi.com/v2', {
          params: { url: args[0] },
          headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'tiktok-downloader-and-converter.p.rapidapi.com'
          }
        });
        
        return {
          success: true,
          response: `🎥 TikTok Video Downloaded\nLink: ${response.data.data.download_url}`
        };
      } catch (error) {
        return {
          success: false,
          error: 'TikTok download failed: ' + error.message
        };
      }
    }
  },

  instagram: {
    description: 'Download Instagram post/reel',
    usage: '!instagram <url>',
    category: 'DOWNLOADER',
    execute: async (args) => {
      if (!args[0]) {
        return { success: false, error: 'Please provide an Instagram URL' };
      }
      return {
        success: true,
        response: `📸 Instagram download coming soon!`
      };
    }
  },

  facebook: {
    description: 'Download Facebook video',
    usage: '!facebook <url>',
    category: 'DOWNLOADER',
    execute: async (args) => {
      if (!args[0]) {
        return { success: false, error: 'Please provide a Facebook URL' };
      }
      return {
        success: true,
        response: `📹 Facebook download coming soon!`
      };
    }
  }
};

module.exports = downloader;