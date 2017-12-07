const PlayerStats = `
  type PlayerStats {
    assists: Int,
    goals: Int,
    mvps: Int,
    saves: Int,
    shots: Int,
    wins: Int
  }
`;

const resolver = {
  PlayerStats: {
    assists: (player, _args, { api }) =>
      api
        .getPlayerStat(player.id, player.platform, 'assists')
        .then(response => Number(response[0].value)),
    goals: (player, _args, { api }) =>
      api
        .getPlayerStat(player.id, player.platform, 'goals')
        .then(response => Number(response[0].value)),
    mvps: (player, _args, { api }) =>
      api
        .getPlayerStat(player.id, player.platform, 'mvps')
        .then(response => Number(response[0].value)),
    saves: (player, _args, { api }) =>
      api
        .getPlayerStat(player.id, player.platform, 'saves')
        .then(response => Number(response[0].value)),
    shots: (player, _args, { api }) =>
      api
        .getPlayerStat(player.id, player.platform, 'shots')
        .then(response => Number(response[0].value)),
    wins: (player, _args, { api }) =>
      api
        .getPlayerStat(player.id, player.platform, 'wins')
        .then(response => Number(response[0].value))
  }
};

module.exports = {
  typeDefs: [PlayerStats],
  resolver
};
