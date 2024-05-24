import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'node:process';

async function start() {
  const PORT = process.env.PORT || 3001;

  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}
start();

// hello danil