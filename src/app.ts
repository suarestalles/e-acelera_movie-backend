import logger from 'jet-logger';

import EnvVars from './common/constants/env';
import server from './server';
import { connectDatabase } from './database/connection';

/******************************************************************************
                                Constants
******************************************************************************/

const SERVER_START_MESSAGE =
  'Express server started on port: ' + EnvVars.Port.toString();

/******************************************************************************
                                  Run
******************************************************************************/

async function startServer() {
  await connectDatabase()

  server.listen(EnvVars.Port, (err) => {
    if (!!err) {
      logger.err(err.message);
    } else {
      logger.info(SERVER_START_MESSAGE);
    }
  });
}

// Start the server
startServer().catch(error => {
  console.error(error)
})