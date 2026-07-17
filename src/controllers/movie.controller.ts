import { Request, Response } from "express";
import { MovieService } from "../services/movie.service";

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
        const movie = await this.service.create(req.body)

        return res.json(movie)
    }

    update = async (req: Request, res: Response) => {
        const movie = await this.service.update(req.params.id.toString(), req.body)

        return res.json(movie)
    }

    delete = async (req: Request, res: Response) => {
        await this.service.delete(req.params.id.toString())
        return res.sendStatus(204)
    }
}