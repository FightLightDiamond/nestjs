import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './app/cat/cat.controller';
import { CatService } from './app/cat/cat.service';
import { TaskModule } from './app/task/task.module';
import { AuthModule } from './app/auth/auth.module';
import { UserModule } from './app/user/user.module';
import { NotificationService } from './app/notification/notification.service';
import { NotificationController } from './app/notification/notification.controller';
import { NotificationModule } from './app/notification/notification.module';
import { UserService } from './app/user/user.service';
import { ApiModule } from './app/api/api.module';
import { WsModule } from './app/ws/ws.module';
import { ApiModule } from './app/api/api.module';

@Module({
  imports: [TaskModule, AuthModule, UserModule, NotificationModule, ApiModule, WsModule],
  controllers: [AppController, CatController, NotificationController],
  providers: [AppService, CatService, NotificationService, UserService],
})
export class AppModule {}
