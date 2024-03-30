// import { Sequelize } from "sequelize";
import pg from "pg";

// const database = new Sequelize({
//   dialect: "postgres",
//   host: process.env.DB_HOST_GEN_2,
//   port: process.env.DB_PORT_GEN_2,
//   database: process.env.DB_DATABASE_GEN_2,
//   username: process.env.DB_USER_GEN_2,
//   password: process.env.DB_PASSWORD_GEN_2,
//   schema: "sitolaut",
//   // dialectModule: pg,
//   // standardConformingStrings: false,
//   native: true,
//   // dialectModule:
// });

const database = new pg.Pool({
  host: process.env.DB_HOST_GEN_2,
  port: process.env.DB_PORT_GEN_2,
  database: process.env.DB_DATABASE_GEN_2,
  user: process.env.DB_USER_GEN_2,
  password: process.env.DB_PASSWORD_GEN_2,
});
// (async () => {
//   try {
//     await database.authenticate();
//   } catch (error) {
//     console.log("Error connecting to database: ", error);
//   }
// })();
export default database;
