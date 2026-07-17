import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import logger from 'jet-logger';
import morgan from 'morgan';
import cors from "cors";

import EnvVars, { NodeEnvs } from './common/constants/env';
import { RouteError } from './common/utils/route-errors';
import apiRouter from './routes/apiRouter';

/******************************************************************************
                                Setup
******************************************************************************/

const app = express();

// CORS
app.use(cors({
  origin: process.env.FRONT_ENV?.split(",") ?? [
      "http://localhost:3000",
    ],
}))
// **** Middleware **** //

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRouter)

// Show routes called in console during development
if (EnvVars.NodeEnv === NodeEnvs.DEV) {
  app.use(morgan('dev'));
}

// Security
if (EnvVars.NodeEnv === NodeEnvs.PRODUCTION) {
  app.use(helmet());
}

// Add error handler
app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  if (EnvVars.NodeEnv !== NodeEnvs.TEST.valueOf()) {
    logger.err(err, true);
  }
  if (err instanceof RouteError) {
    res.status(err.status).json({ error: err.message });
  }
  logger.err(err, true)
  // return next(err);
  return res.status(500).json({
    error: "Internal server error"
  })
});

export default app;
