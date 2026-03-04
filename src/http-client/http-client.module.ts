import { DynamicModule, Module } from '@nestjs/common';
import { ASYNC_OPTIONS_TYPE, ConfigurableModuleClass, OPTIONS_TYPE } from './http-client.module-definition';

@Module({})
export class HttpClientModule extends ConfigurableModuleClass {
	static register(options: typeof OPTIONS_TYPE): DynamicModule {
		return {
			// your custom logic here
			...super.register(options),
		};
	}

	static registerAsync(options: typeof ASYNC_OPTIONS_TYPE): DynamicModule {
		return {
			// your custom logic here
			...super.registerAsync(options),
		};
	}
}
