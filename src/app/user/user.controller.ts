import { Body, Controller, Post } from '@nestjs/common';
import { UserPipe } from './pipes/user.pipe';
import { RegisterUserInterface, UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  create(
    @Body(UserPipe) payload: RegisterUserInterface,
  ): RegisterUserInterface {
    return this.userService.create(payload);
  }
}
