import { AppDataSource } from "./data-source"

export async function connectDatabase() {
    try {
        await AppDataSource.initialize()
        console.log("Database connected!")
    } catch (error) {
        console.error('Database connection failed: ', error)
        process.exit(1)
    }
}