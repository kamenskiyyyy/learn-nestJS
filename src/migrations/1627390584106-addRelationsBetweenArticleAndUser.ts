import { MigrationInterface, QueryRunner } from 'typeorm';

export class addRelationsBetweenArticleAndUser1627390584106
  implements MigrationInterface
{
  name = 'addRelationsBetweenArticleAndUser1627390584106';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "createAt"`);
    await queryRunner.query(
      `ALTER TABLE "articles" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(`ALTER TABLE "articles" ADD "authorId" integer`);
    await queryRunner.query(
      `ALTER TABLE "articles" ADD CONSTRAINT "FK_65d9ccc1b02f4d904e90bd76a34" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "articles" DROP CONSTRAINT "FK_65d9ccc1b02f4d904e90bd76a34"`,
    );
    await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "authorId"`);
    await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "createdAt"`);
    await queryRunner.query(
      `ALTER TABLE "articles" ADD "createAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
  }
}
