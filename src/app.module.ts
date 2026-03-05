import { AggregateByLocaleContextIdStrategy } from '@/core/aggregate-by-locale.strategy';
import { AggregateByTenantContextIdStrategy } from '@/core/aggregate-by-tenant.strategy';
import { Module } from '@nestjs/common';
import { ContextIdFactory } from '@nestjs/core';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CronModule } from './cron/cron.module';
import { DataSourceModule } from './data-source/data-source.module';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { HttpClientModule } from './http-client/http-client.module';
import { I18nModule } from './i18n/i18n.module';
import { PaymentsModule } from './payments/payments.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { TagsModule } from './tags/tags.module';
import { UsersModule } from './users/users.module';

ContextIdFactory.apply(new AggregateByTenantContextIdStrategy());
ContextIdFactory.apply(new AggregateByLocaleContextIdStrategy());

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
		DataSourceModule,
		UsersModule,
		I18nModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
