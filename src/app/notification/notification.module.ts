import { Module, } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
// import { UserService } from '../user/user.service';

@Module({
  imports: [UserModule],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
