const fs = require('fs');
const _ = require('lodash');

module.exports.readSecret = (fileName, secretsPath = '/run/secrets/') => {
  let secret = null;
  try {
    secret = fs.readFileSync(
      `${secretsPath}${fileName}`,
      { encoding: 'utf8', flag: 'r' }
    );
  } catch (err) {
    if (err.code === 'ENOENT') {
      return null;
    } else {
      throw err;
    }
  }

  return !_.isNil(secret) && !_.isEmpty(secret) ? secret : null;
};
