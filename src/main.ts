import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import expressSession = require('express-session');
import flash = require('connect-flash');
import exphbs = require('express-handlebars');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.engine('.hbs', exphbs({ extname: '.hbs' }));
  app.set('view engine', '.hbs');
  app.use(
    expressSession({
      // FIXME: put into env
      secret: 'A7uH6bN5qL&hX9i',
      resave: true,
      saveUninitialized: false,
      // store: new MongoStore({ mongooseConnection: mongoose.connection }),
    }),
  );
  app.use(flash());

  await app.listen(3000);
}
bootstrap();
