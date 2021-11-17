import { Sequelize } from 'sequelize-typescript';
import * as mssql from 'mssql';
import { Cat } from '../cats/cat.entity';

export const databaseProviders = [
  {
    // SEQUELIZE variable is stored in a file named 'constants' so it can be easily reused anywhere without being subject to human error.
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mssql',
				host: process.env.MSSQL_HOST,
				port: Number(process.env.MSSQL_PORT),
				username: process.env.MSSQL_USER,
				password: process.env.MSSQL_PASSWORD,
				database: process.env.MSSQL_DB,
        define: {
          freezeTableName: true,
          createdAt: false,
          updatedAt: false,
        },
      });
      // Add Models Here
      sequelize.addModels([Cat]);
      // !!! await sequelize.sync();
      return sequelize;
    },
  },
  // {
  //   provide: 'MSSQL',
  //   useFactory: async () => {
  //     const pool = await mssql.connect(
  //       {
  //         user: process.env.MSSQL_USER,
  //         password: process.env.MSSQL_PASSWORD,
  //         database: process.env.MSSQL_DB,
  //         server: process.env.MSSQL_HOST,
  //         pool: {
  //           max: 10,
  //           min: 0,
  //           idleTimeoutMillis: 30000
  //         },
  //         options: {
  //           encrypt: false, // for azure
  //           trustServerCertificate: false // change to true for local dev / self-signed certs
  //         }
  //       }
  //     )
  //     return pool;
  //   },
  // },  
];