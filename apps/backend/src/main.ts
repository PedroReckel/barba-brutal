import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true }); // Tem que usar o CORS igual a true para ele conseguir receber requisições de outras origens
  await app.listen(3001);
}
bootstrap();
