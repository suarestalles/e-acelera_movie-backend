import { Repository } from "typeorm";
import { AppDataSource } from "../../database/data-source";
import { Movie } from "../../entities/Movie";
import { IMovieRepository } from "../interfaces/movie.interface.repo";
import { CreateMovieDTO } from "../../entities/dto/movie/CreateMovieDTO";
import { UpdateMovieDTO } from "../../entities/dto/movie/UpdateMovieDTO";

export class MovieRepository implements IMovieRepository {

    private repo: Repository<Movie>

    constructor() {
        this.repo = AppDataSource.getRepository(Movie)
    }

    async findAll(): Promise<Movie[]> {
        return this.repo.find()
    }

    async findById(id: string): Promise<Movie | null> {
        return await this.repo.findOneBy({ id })
    }

    async create(movie: CreateMovieDTO): Promise<Movie> {
        return this.repo.save(movie)
    }

    async update(id: string, data: UpdateMovieDTO): Promise<Movie> {
        const movie = await this.repo.findOne({
            where: { id }
        })

        Object.assign(movie!, data)

        return this.repo.save(movie!)
    }

    async delete(id: string): Promise<void> {
        await this.repo.delete(id)
    }
}