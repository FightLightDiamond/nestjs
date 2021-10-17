import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AssignAdultMiddleware } from './middlewares/assign-adult.middleware';

export function logger(req, res, next) {
  console.log('I am called');
  next();
}

@Module({
  controllers: [UserController],
  providers: [UserService],
  // global User Service for all module
  exports: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(logger)
      .forRoutes({ path: 'notification', method: RequestMethod.GET });
    consumer
      .apply(AssignAdultMiddleware, logger)
      .forRoutes({ path: 'register', method: RequestMethod.POST });
  }
}
