const PlayerSkill = `
  type PlayerSkill {
    division: Int,
    playlist: Int,
    mu: Float,
    winStreak: Int,
    tier: Int,
    skill: Int,
    sigma: Float,
    matchesPlayed: Int,
    tierMax: Int
  }
`;

const resolver = {
  PlayerSkill: {
    winStreak: playerSkill => playerSkill.win_streak,
    matchesPlayed: playerSkill => playerSkill.matches_played,
    tierMax: playerSkill => playerSkill.tier_max
  }
};

module.exports = {
  typeDefs: [PlayerSkill],
  resolver
};
