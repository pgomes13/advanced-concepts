import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CronModule } from './cron/cron.module';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { HttpClientModule } from './http-client/http-client.module';
import { PaymentsModule } from './payments/payments.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { TagsModule } from './tags/tags.module';

@Module({
	imports: [
		HttpClientModule.register({ baseUrl: 'http://nestjs.com' }),
		EventEmitterModule.forRoot(),
		CoffeesModule,
		CronModule,
		SchedulerModule,
		FibonacciModule,
		HttpClientModule,
		TagsModule,
		PaymentsModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
