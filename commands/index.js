const fs = require('fs');
const path = require('path');

const commands = {};
const commandsDir = path.join(__dirname);

// Load all command files
const categories = [
  '18plus',
  'ai',
  'anonymous',
  'audio-edit',
  'channel',
  'coding',
  'community',
  'converter',
  'downloader',
  'education',
  'ephoto',
  'game',
  'general',
  'gpt',
  'group',
  'moded-apk',
  'movie',
  'news',
  'owner',
  'photofunia',
  'privacy',
  'religion',
  'search',
  'settings',
  'shortener',
  'sports',
  'stalker',
  'sticker',
  'system',
  'tools',
  'uploader',
  'utility',
  'wa-business'
];

categories.forEach(category => {
  try {
    const categoryPath = path.join(commandsDir, category);
    if (fs.existsSync(categoryPath)) {
      const categoryCommands = require(categoryPath);
      commands[category] = categoryCommands;
    }
  } catch (error) {
    console.error(`Error loading ${category} commands:`, error.message);
  }
});

// Get all available commands
function getAllCommands() {
  const allCommands = {};
  for (const category in commands) {
    allCommands[category] = Object.keys(commands[category]);
  }
  return allCommands;
}

// Execute command
async function executeCommand(category, commandName, args = []) {
  try {
    if (!commands[category]) {
      return { success: false, error: `Category "${category}" not found` };
    }

    if (!commands[category][commandName]) {
      return { success: false, error: `Command "${commandName}" not found in category "${category}"` };
    }

    const command = commands[category][commandName];
    return await command.execute(args);
  } catch (error) {
    return { success: false, error: error.message };
  }
}

module.exports = {
  commands,
  getAllCommands,
  executeCommand,
  categories
};
