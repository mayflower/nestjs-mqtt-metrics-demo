import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrometheusModule } from './prometheus/prometheus.module';
import { MetricsModule } from './metrics/metrics.module';

@Module({
  imports: [PrometheusModule, MetricsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
