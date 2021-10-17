import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { LoggerMiddleware } from '../../middlewares/logger.middleware';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule implements NestModule {
  /**
   * Middleware
   * @param consumer
   */
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'tasks', method: RequestMethod.GET });
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'tasks/:id', method: RequestMethod.GET });
  }
}
