const player = require('./player');
const region = require('./region');

const typeDef = `
  enum Platform {
    STEAM,
    XBOX,
    PLAYSTATION
  }

  type Query {
    player(id: ID!, platform: Platform!): Player,
    regions: [Region]
  }
`;

const resolver = {
  Query: {
    player(_root, args) {
      return { id: args.id, platform: args.platform };
    },
    regions(_root, args, { api }) {
      return api.getRegions();
    }
  }
};

module.exports = {
  typeDefs: [...player.typeDefs, ...region.typeDefs, typeDef],
  resolvers: { ...player.resolver, ...region.resolver, ...resolver }
};
