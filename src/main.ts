import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  // Create the main NestJS application
  const app = await NestFactory.create(AppModule);

  // Start the main application (API Gateway)
  await app.listen(3000);
  
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
