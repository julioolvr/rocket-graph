const got = require('got');

const BASE_URL = 'https://api.rocketleague.com/api/v1';

// TODO: This is tied to the graphql enum, see if there's a way
// to make that explicit
function keyForPlatform(key) {
  switch (key) {
  case 'STEAM':
    return 'steam';
  case 'XBOX':
    return 'xboxone';
  case 'PLAYSTATION':
    return 'ps4';
  }
}

function apiFactory(token) {
  return {
    getPlayerSkills(id, platform) {
      return this.makeRequest(
        `/${keyForPlatform(platform)}/playerskills/${id}`
      );
    },
    getPlayerTitles(id, platform) {
      return this.makeRequest(
        `/${keyForPlatform(platform)}/playertitles/${id}`
      );
    },
    getRegions() {
      return this.makeRequest('/regions');
    },
    makeRequest(path, method = 'GET', body) {
      return got(`${BASE_URL}${path}`, {
        method,
        body,
        json: true,
        headers: {
          Authorization: `Token ${token}`
        }
      }).then(response => response.body);
    }
  };
}

module.exports = apiFactory;
