// const { database } = require('typeorm');

// const myDataSource = new database({
//     type: process.env.TYPEORM_CONNECTION,
//     host: process.env.TYPEORM_HOST,
//     port: process.env.TYPEORM_PORT,
//     username: process.env.TYPEORM_USERNAME,
//     password: process.env.TYPEORM_PASSWORD,
//     database: process.env.TYPEORM_DATABASE,
// });

// myDataSource
//     .initialized()
//     .then(() =>{
//         console.log('Data Source has benn intialized!');
//     })
//     .catch((err) => {
//         console.error('Error occured during data source initializing!');
//         myDataSource.destroy();
//     });

// module.exports =  DataSource;

const dotenv = require("dotenv");
dotenv.config();

const { DataSource } = require("typeorm");

const appDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
});

appDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch(() => {
    console.log("Promise Rejected!");
  });

module.exports = {
  appDataSource,
};
