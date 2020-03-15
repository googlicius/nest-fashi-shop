import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export interface ConfigurationInterface {
  typeormConfiguration: TypeOrmModuleOptions;
}
