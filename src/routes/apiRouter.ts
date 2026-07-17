import { Router } from 'express';
import movieRoutes from './movie.routes';

const apiRouter = Router();
apiRouter.use('/movies', movieRoutes)

export default apiRouter;
