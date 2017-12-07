const api = require('../api');

const Player = `
  type Player {
    id: ID!,
    username: String
  }
`;

const resolver = {
  Player: {
    username: player =>
      api
        .getPlayerSkills(player.id, player.platform)
        .then(response => response[0].user_name)
  }
};

module.exports = {
  typeDef: Player,
  resolver
};
