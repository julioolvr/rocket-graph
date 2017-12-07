module.exports = {
  getPlayerSkills(id, platform) {
    return Promise.resolve([{ user_name: `Player ${id} ${platform}` }]);
  }
};
