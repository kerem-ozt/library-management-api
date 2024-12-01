module.exports = {
    development: {
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'library',
      host: process.env.DB_HOST || '127.0.0.1',
      dialect: 'postgres',
      directory: './src',
    },
    production: {
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'library',
      host: process.env.DB_HOST || '127.0.0.1',
      dialect: 'postgres',
      directory: './src',
    },
  };
  