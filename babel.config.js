const fs = require('fs');

const requireJSON = (filePath) => {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

module.exports = (api) => {
  api.cache(false);
  return requireJSON('./.babelrc');
};
