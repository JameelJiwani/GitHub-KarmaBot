require('dotenv').config();  // this line is important!
module.exports = {
    "development": {
      "use_env_variable": "DATABASE_URL",
      "url": process.env.DATABASE_URL,
      "username": "root",
      "password": null,
      "database": "database_development",
      "host": "127.0.0.1",
      "dialect": "postgres"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "postgres"
    },
    "production": {
      "use_env_variable": "DATABASE_URL",
      "url": process.env.DATABASE_URL,
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "postgres"
    }
  }
  