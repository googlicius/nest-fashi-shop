import { ConfigurationInterface } from './configuration.interface';

export default (): ConfigurationInterface => ({
  typeormConfiguration: {
    type: 'mysql',
    host: process.env.TYPEORM_HOST || 'localhost',
    port: +process.env.TYPEORM_HOST || 3306,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    autoLoadEntities: true,
  },
});
