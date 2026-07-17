import HttpStatusCodes from "../common/constants/HttpStatusCodes";
import { RouteError } from "../common/utils/route-errors";
import { CreateMovieDTO } from "../entities/dto/movie/CreateMovieDTO";
import { UpdateMovieDTO } from "../entities/dto/movie/UpdateMovieDTO";
import { IMovieRepository } from "../repositories/interfaces/movie.interface.repo";

export class MovieService {
    constructor(private readonly repository: IMovieRepository) {}

    async findAll() {
        return this.repository.findAll()
    }
    
    async findById(id: string) {
        const movie = await this.repository.findById(id)
        if(!movie) {
            throw new RouteError(
                HttpStatusCodes.NOT_FOUND,
                "Movie not found"
            )
        }
        return this.repository.findById(id)
    }
    
    async create(data: CreateMovieDTO) {
        return this.repository.create(data)
    }

    async update(id: string, data: UpdateMovieDTO) {
        await this.findById(id)
        return this.repository.update(id, data)
    }
    
    async delete(id: string) {
        await this.findById(id)
        return this.repository.delete(id)
    }
}