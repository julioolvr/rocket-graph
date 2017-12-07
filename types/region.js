const Region = `
  type Region {
    name: String!,
    platforms: String!,
  }
`;

const resolver = {
  Region: {
    name: regionResponse => regionResponse.region
  }
};

module.exports = {
  typeDefs: [Region],
  resolver
};
