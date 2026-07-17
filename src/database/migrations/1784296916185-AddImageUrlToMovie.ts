import { MigrationInterface, QueryRunner } from "typeorm";

export class AddImageUrlToMovie1784296916185 implements MigrationInterface {
    name = 'AddImageUrlToMovie1784296916185'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" ADD "imageUrl" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "imageUrl"`);
    }

}
