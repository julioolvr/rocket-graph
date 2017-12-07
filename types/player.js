const playerSkill = require('./playerSkill');
const playerStats = require('./playerStats');

const Player = `
  type Player {
    id: ID!,
    username: String,
    skills: [PlayerSkill],
    titles: [String],
    stats: PlayerStats
  }
`;

const resolver = {
  Player: {
    username: (player, _args, { api }) =>
      api
        .getPlayerSkills(player.id, player.platform)
        .then(response => response[0].user_name),
    skills: (player, _args, { api }) =>
      api
        .getPlayerSkills(player.id, player.platform)
        .then(response => response[0].player_skills),
    titles: (player, _args, { api }) =>
      api
        .getPlayerTitles(player.id, player.platform)
        .then(response => response.titles),
    stats: player => player
  }
};

module.exports = {
  typeDefs: [Player, ...playerSkill.typeDefs, ...playerStats.typeDefs],
  resolver: { ...resolver, ...playerSkill.resolver, ...playerStats.resolver }
};
