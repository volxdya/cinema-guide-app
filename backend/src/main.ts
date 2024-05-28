import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import * as process from 'node:process';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const PORT = process.env.PORT || 3001;

  const app = await NestFactory.create(AppModule);

  // setting swagger (auth ui documentation)
  const config = new DocumentBuilder()
    .setTitle('Cinema Guide App')
    .setDescription('Документация к Cinema guide')
    .setVersion('1.0.0')
    .build();

  const documentBuilder = SwaggerModule.createDocument(app, config);

  // setup path documentation
  SwaggerModule.setup('/api/docs', app, documentBuilder);

  // start server
  await app.listen(PORT, () => {
    console.log(`server -> http://localhost:${PORT}`);
    console.log(`documentation -> http://localhost:${PORT}/api/docs`);
  });
}

start();