import { Request, Response } from "express";
import { MovieService } from "../services/movie.service";
import { createMovieSchema, updateMovieSchema } from "../schemas/movie/movie.schema";

export class MovieController {

    constructor(private readonly service: MovieService) {}

    index = async (req: Request, res: Response) => {
        const movies = await this.service.findAll()

        return res.json(movies)
    }

    findById = async (req: Request, res: Response) => {
        const movies = await this.service.findById(req.params.id.toString())

        return res.json(movies)
    }

    create = async (req: Request, res: Response) => {
        const data = createMovieSchema.parse(req.body)
        const movie = await this.service.create(data)

        return res.json(movie)
    }

    update = async (req: Request, res: Response) => {
        const data = updateMovieSchema.parse(req.body)
        const movie = await this.service.update(req.params.id.toString(), data)

        return res.json(movie)
    }

    delete = async (req: Request, res: Response) => {
        await this.service.delete(req.params.id.toString())
        return res.sendStatus(204)
    }
}