const Player = `
  type Player {
    id: ID!,
    username: String
  }
`;

const resolver = {
  Player: {}
};

module.exports = {
  typeDef: Player,
  resolver
};
