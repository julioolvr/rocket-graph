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
      return { id: args.id, username: `${args.platform} player` };
    }
  }
};

module.exports = {
  typeDefs: [player.typeDef, typeDef],
  resolvers: { ...player.resolver, ...resolver }
};
