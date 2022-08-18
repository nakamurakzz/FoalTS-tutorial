import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1660798637453 implements MigrationInterface {
    name = 'migration1660798637453'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todo" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "text" varchar NOT NULL, CONSTRAINT "UQ_bac19e514dfe0d2fe9580dcecf5" UNIQUE ("text"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todo"`);
    }

}
