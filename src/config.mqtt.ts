import { MqttOptions, Transport } from '@nestjs/microservices';

export const mqttConfig: MqttOptions = {
  transport: Transport.MQTT,
  options: {
    url: process.env.MQTT_BROKER || 'mqtt://localhost:1883',
  }
};