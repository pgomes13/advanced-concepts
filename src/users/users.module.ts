import { DataSourceModule } from '@/data-source/data-source.module';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
	imports: [DataSourceModule],
	controllers: [UsersController],
	providers: [UsersService],
})
export class UsersModule {}
