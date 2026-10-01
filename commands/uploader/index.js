// Uploader Commands

const uploader = {
  upload: {
    description: 'Upload a file',
    usage: '!upload <file>',
    category: 'UPLOADER',
    execute: async (args) => {
      return {
        success: true,
        response: '📤 File upload feature coming soon!'
      };
    }
  },

  share: {
    description: 'Share uploaded file',
    usage: '!share <file>',
    category: 'UPLOADER',
    execute: async (args) => {
      return {
        success: true,
        response: '🔗 File sharing feature coming soon!'
      };
    }
  }
};

module.exports = uploader;
