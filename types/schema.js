const player = require('./player');

const typeDef = `
  enum Platform {
    STEAM,
    XBOX,
    PLAYSTATION
  }

  type Query {
    player(id: ID!, platform: Platform!): Player
  }
`;

const resolver = {
  Query: {
    player(root, args) {
      return { id: args.id, platform: args.platform };
    }
  }
};

module.exports = {
  typeDefs: [...player.typeDefs, typeDef],
  resolvers: { ...player.resolver, ...resolver }
};
