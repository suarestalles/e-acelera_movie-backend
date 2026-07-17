import { DataSource } from "typeorm";
import path from "path";
import { DbVars } from "../common/constants/env";
import { Movie } from "../entities/Movie";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: DbVars.DB_HOST,
    port: Number(DbVars.DB_PORT),
    username: DbVars.DB_USERNAME,
    password: DbVars.DB_PASSWORD,
    database: DbVars.DB_DATABASE,
    ssl: {
        rejectUnauthorized: false
    },
    synchronize: false,
    logging: true,
    entities: [Movie],
    migrations: [path.join(__dirname, '/migrations/*.ts')]
})