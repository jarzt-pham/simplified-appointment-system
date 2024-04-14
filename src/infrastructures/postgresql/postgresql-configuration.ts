import knex, { Knex } from "knex";

export const PostgresqlConfigurationParameter: Knex.Config  = Object.freeze({
    client: "pg",
    connection: {
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        port: parseInt(process.env.POSTGRES_PORT),
    },
    pool: {
        min: parseInt(process.env.POSTGRES_POOLING_MIN) || 2,
        max:  parseInt(process.env.POSTGRES_POOLING_MAX) || 10
    }
   
})

export class PostgresqlConfiguration {
    static async createKnexConnection() {
        return knex(PostgresqlConfigurationParameter);
    }
}