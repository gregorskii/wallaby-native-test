const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

// TODO: find lib that automatically imports the .env and returns object

export default {
  TEST: process.env.TEST
};
