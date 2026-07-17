import { MovieController } from "../../controllers/movie.controller";
import { MovieRepository } from "../../repositories/typeorm/movie.repository.ts";
import { MovieService } from "../../services/movie.service";

const repository = new MovieRepository()
const service = new MovieService(repository)

export const movieController = new MovieController(service)