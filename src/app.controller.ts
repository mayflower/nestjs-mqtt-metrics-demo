import { Controller, Get } from '@nestjs/common';
import { Ctx, MessagePattern, MqttContext, Payload, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('demo', Transport.MQTT)
  public async subscribeMqtt(@Payload() data: number, @Ctx() context: MqttContext): Promise<void> {    
    this.appService.subscribe(data, context);
  }
}
