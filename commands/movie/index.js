// Movie Commands
const axios = require('axios');

const movie = {
  nowshowing: {
    description: 'Show now playing movies',
    usage: '!nowshowing',
    category: 'MOVIE',
    execute: async (args) => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
          params: {
            api_key: process.env.TMDB_API_KEY,
            language: 'en-US',
            page: 1
          }
        });
        
        const movies = response.data.results.slice(0, 5).map((movie, idx) => 
          `${idx + 1}. ${movie.title} (${new Date(movie.release_date).getFullYear()}) - Rating: ${movie.vote_average}/10`
        ).join('\n');
        
        return {
          success: true,
          response: `🎬 Now Showing Movies:\n\n${movies}`
        };
      } catch (error) {
        return { success: false, error: 'Movie fetch failed: ' + error.message };
      }
    }
  },

  searchmovie: {
    description: 'Search movie details',
    usage: '!searchmovie <movie name>',
    category: 'MOVIE',
    execute: async (args) => {
      if (!args.length) {
        return { success: false, error: 'Please provide a movie name' };
      }
      try {
        const query = args.join(' ');
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: process.env.TMDB_API_KEY,
            query: query
          }
        });
        
        if (response.data.results.length > 0) {
          const movie = response.data.results[0];
          return {
            success: true,
            response: `🎞️ ${movie.title}\nRelease: ${movie.release_date}\nRating: ${movie.vote_average}/10\nOverview: ${movie.overview}`
          };
        }
        return { success: false, error: 'Movie not found' };
      } catch (error) {
        return { success: false, error: 'Search failed: ' + error.message };
      }
    }
  }
};

module.exports = movie;