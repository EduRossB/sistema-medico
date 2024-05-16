import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configServices = app.get(ConfigService);

  console.log(configServices.get('DB_PORT'));

  await app.listen(3000);
}
bootstrap();
