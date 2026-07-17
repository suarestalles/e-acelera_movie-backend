import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMovie1784140005745 implements MigrationInterface {
    name = 'CreateMovie1784140005745'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "synopsis" text NOT NULL, "genre" character varying NOT NULL, "director" character varying NOT NULL, "releaseYear" integer NOT NULL, "duration" integer NOT NULL, "rating" numeric(3,1) NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movies"`);
    }

}
