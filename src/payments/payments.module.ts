import { EventContext } from '@/payments/context/event-context';
import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { PaymentsWebhookController } from './payments-webhook.controller';
import { SubscriptionsService } from './subscriptions.service';

@Module({
	controllers: [PaymentsWebhookController],
	providers: [NotificationsService, SubscriptionsService, EventContext],
})
export class PaymentsModule {}
