// Game Commands

const game = {
  guess: {
    description: 'Guess the number game',
    usage: '!guess <1-100>',
    category: 'GAME',
    execute: async (args) => {
      return {
        success: true,
        response: `🎮 Number guessing game coming soon!`
      };
    }
  },

  dice: {
    description: 'Roll a dice',
    usage: '!dice',
    category: 'GAME',
    execute: async (args) => {
      const roll = Math.floor(Math.random() * 6) + 1;
      return {
        success: true,
        response: `🎲 You rolled: ${roll}`
      };
    }
  },

  coin: {
    description: 'Flip a coin',
    usage: '!coin',
    category: 'GAME',
    execute: async (args) => {
      const flip = Math.random() > 0.5 ? 'Heads' : 'Tails';
      return {
        success: true,
        response: `🪙 Coin flip: ${flip}`
      };
    }
  },

  trivia: {
    description: 'Play trivia game',
    usage: '!trivia',
    category: 'GAME',
    execute: async (args) => {
      return {
        success: true,
        response: `🧠 Trivia game coming soon!`
      };
    }
  }
};

module.exports = game;
