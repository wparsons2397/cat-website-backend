import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { CommsModule } from './comms.module';

async function bootstrap() {
  const app = await NestFactory.create(CommsModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
