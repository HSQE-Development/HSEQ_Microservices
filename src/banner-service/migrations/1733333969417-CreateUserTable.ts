import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1733333969417 implements MigrationInterface {
    name = 'CreateUserTable1733333969417'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`last_name\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`document\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD UNIQUE INDEX \`IDX_c1b20b2a1883ed106c3e746c25\` (\`document\`)`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`company\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`charge\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`accept_personal_data_use\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`receive_certificate\` tinyint NOT NULL DEFAULT 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`receive_certificate\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`accept_personal_data_use\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`charge\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`company\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP INDEX \`IDX_c1b20b2a1883ed106c3e746c25\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`document\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`last_name\` varchar(100) NOT NULL`);
    }

}
