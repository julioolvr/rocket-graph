const Player = `
  type Player {
    id: ID!,
    username: String
  }
`;

const resolver = {
  Player: {
    username: (player, _args, { api }) =>
      api.getPlayerSkills(player.id, player.platform).then(response => {
        return response[0].user_name;
      })
  }
};

module.exports = {
  typeDef: Player,
  resolver
};
