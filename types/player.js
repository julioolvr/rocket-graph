const playerSkill = require('./playerSkill');

const Player = `
  type Player {
    id: ID!,
    username: String,
    skills: [PlayerSkill],
    titles: [String]
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
        .then(response => response.titles)
  }
};

module.exports = {
  typeDefs: [Player, ...playerSkill.typeDefs],
  resolver: { ...resolver, ...playerSkill.resolver }
};
