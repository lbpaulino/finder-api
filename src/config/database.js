require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  port: 5432,
  host: 'pstgrs-prd.postgres.database.azure.com',
  username: 'pstgrsprd',
  password: 'lixo_123',
  database: 'postgres',
  define: {
    timeStamps: true,
    underscored: true,
    underscoredAll: true,
  },
  ssl: true,
  sslmode: "required",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
}
