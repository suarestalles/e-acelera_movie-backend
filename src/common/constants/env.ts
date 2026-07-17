/******************************************************************************
                                 Constants
******************************************************************************/

// NOTE: These need to match the names of your ".env" files
export const NodeEnvs = {
  DEV: 'development',
  TEST: 'test',
  PRODUCTION: 'production',
} as const;

/******************************************************************************
                                 Setup
******************************************************************************/

const EnvVars = {
  NodeEnv: process.env.NODE_ENV ?? NodeEnvs.DEV,
  Port: Number(process.env.PORT ?? 9000),
};

export const DbVars = {
  DB_HOST: process.env.DB_HOST ?? 'localhost',
  DB_PORT: process.env.DB_PORT ?? 5432,
  DB_USERNAME: process.env.DB_USERNAME ?? 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD ?? '',
  DB_DATABASE: process.env.DB_DATABASE ?? 'movie_db',
  PGSSLMODE: process.env.PGSSLMODE ?? false,
}

export const frontVars = {
  frontUrl: process.env.FRONT_ENV
}

/******************************************************************************
                            Export default
******************************************************************************/

export default EnvVars;
