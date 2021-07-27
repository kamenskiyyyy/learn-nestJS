import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1627370421726 implements MigrationInterface {
  name = 'SeedDb1627370421726';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags(name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );

    // password is 123
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES('foo', 'foo@gmail.com', '$2a$10$gBOSRY0avSfEgQ/Ti8XYCegJR/DKuUCQhykj6knlQ.U5pvSXCiK5i')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'first article description', 'first article body', 'coffee,dragons', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'Second article', 'Second article description', 'Second article body', 'coffee,dragons', 1)`,
    );
  }

  public async down(): Promise<void> {}
}
