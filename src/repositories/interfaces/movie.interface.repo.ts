import { CreateMovieDTO } from "../../entities/dto/movie/CreateMovieDTO";
import { UpdateMovieDTO } from "../../entities/dto/movie/UpdateMovieDTO";
import { Movie } from "../../entities/Movie";

export interface IMovieRepository {
    findAll(): Promise<Movie[]>;
    findById(id: string): Promise<Movie | null>
    create(data: CreateMovieDTO): Promise<Movie>
    update(id: string, data: UpdateMovieDTO): Promise<Movie>
    delete(id: string): Promise<void>
}