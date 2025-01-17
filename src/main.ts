import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 6000;

  await app.listen(port, () => console.log(`server start on port ${port}`));
}

bootstrap();
