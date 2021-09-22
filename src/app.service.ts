import { Injectable } from '@nestjs/common';
import { MqttContext } from '@nestjs/microservices';
import { PrometheusService } from './prometheus/prometheus.service';

@Injectable()
export class AppService {
  constructor(
    private promClientService: PrometheusService) {}

  
  getHello(): string {
    return 'Hello World!';
  }

  public subscribe(data: number, context: MqttContext) {
    console.log(`Subscribe topic: "${context.getTopic()}" with data: `);
    console.log(data);
    const gauge = this.promClientService.registerGauge("MQTT_DEMO_CLIENT", "timestamp");
    gauge.set(data);
  }
}
