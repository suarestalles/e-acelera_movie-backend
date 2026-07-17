import { z } from "zod";

export const createMovieSchema = z.object({
    title: z.string().min(1, "Title is required"),
    synopsis: z.string().min(10, "Synopsis must have at least 10 characteres"),
    genre: z.string().min(1, "Genre is required"),
    director: z.string().min(1, "Director is required"),
    releaseYear: z.number().int().min(1900),
    duration: z.number().int().positive(),
    rating: z.number().min(0).max(10).default(0),
    imageUrl: z.url().min(5, "The image URL is required and must be longer than 5 characters.")
})

export const updateMovieSchema = createMovieSchema.partial()