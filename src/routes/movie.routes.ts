import { Router } from "express";
import { movieController } from "../modules/movie";
import { createMovieSchema, updateMovieSchema } from "../schemas/movie/movie.schema";
import { validate } from "../middlewares/validate";

const movieRoutes = Router()

movieRoutes.get("/", movieController.index)
movieRoutes.get("/:id", movieController.findById)
movieRoutes.post("/", validate(createMovieSchema), movieController.create)
movieRoutes.put("/:id", validate(updateMovieSchema), movieController.update)
movieRoutes.delete("/:id", movieController.delete)

export default movieRoutes;