import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  getAllTask() {
    return '1213';
  }

  createTaskDto(createTaskDto: CreateTaskDto) {
    const { title, description } = createTaskDto;

    return { title, description };
  }
}
