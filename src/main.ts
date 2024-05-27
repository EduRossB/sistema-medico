import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configServices = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  console.log(configServices.get('DB_PORT'));

  await app.listen(3000);
}
bootstrap();
