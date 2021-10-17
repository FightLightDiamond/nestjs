import {Controller, Get, Post, Body, UseInterceptors, UseFilters, Query, Param} from '@nestjs/common';
import {TaskService} from "./task.service";
import { CreateTaskDto } from './dto/create-task.dto';
// import {LoggingInterceptor} from "../interceptors/logger.interceptor";
import {TransformInterceptor} from "../../interceptors/transform.interceptor";
// import {TimeoutInterceptor} from "../interceptors/timeout.interceptor";
import {ErrorsInterceptor} from "../../interceptors/errors.interceptor";
// import {ExcludeNullInterceptor} from "../interceptors/exclude-null.interceptor";
import {User} from "../../decorators/user.decorator";
import {HttpExceptionFilter} from "../../filters/http-exception.filter";

// @UseInterceptors(new LoggingInterceptor())
// @UseInterceptors(new TimeoutInterceptor())
@UseInterceptors(new ErrorsInterceptor())
// @UseInterceptors(new ExcludeNullInterceptor())
@UseInterceptors(new TransformInterceptor())

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Get()
  getAllTask() {
    return this.taskService.getAllTask();
  }

  @Get(':name')
  getTaskByName(@Param('name') name: string) {
    return name;
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTaskDto(createTaskDto);
  }

  /**
   * Lấy decorator truyền vào title
   * @param title
   */
  @UseFilters(new HttpExceptionFilter())
  @Get()
  async findOne(@User('title') title: string) {
    return title
  }
}