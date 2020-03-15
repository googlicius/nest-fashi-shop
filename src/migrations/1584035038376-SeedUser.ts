import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { User } from 'src/users/user.entity';

export class SeedUser1584035038376 implements MigrationInterface {
  public async up(_: QueryRunner): Promise<any> {
    const user = new User();
    user.firstName = 'Dang';
    user.lastName = 'Nguyen';
    user.isActive = true;
    user.isAdmin = true;
    user.password = '1234abcd';
    user.email = 'haidang009@gmail.com';
    await getRepository(User).save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DELETE FROM user`);
  }
}
