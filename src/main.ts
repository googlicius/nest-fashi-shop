import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as Sentry from '@sentry/node';
import { AppModule } from './app.module';
import { join } from 'path';
import expressSession = require('express-session');
import flash = require('connect-flash');
import exphbs = require('express-handlebars');
import passport = require('passport');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  Sentry.init({
    dsn:
      'https://a2c220be49144a6e9ed105f6383e1223@o428638.ingest.sentry.io/5374240',
  });

  // The request handler must be the first middleware on the app
  app.use(Sentry.Handlers.requestHandler());

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.engine('.hbs', exphbs({ extname: '.hbs' }));
  app.set('view engine', '.hbs');
  app.use(
    expressSession({
      // FIXME: put into env
      secret: 'A7uH6bN5qL&hX9i',
      resave: false,
      saveUninitialized: false,
      // store: new MongoStore({ mongooseConnection: mongoose.connection }),
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

  await app.listen(3002);
}
bootstrap();
