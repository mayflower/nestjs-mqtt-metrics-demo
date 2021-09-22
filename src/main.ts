import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { mqttConfig } from './config.mqtt';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(mqttConfig);

  app.startAllMicroservices();
  
  await app.listen(3005);
}
bootstrap();
