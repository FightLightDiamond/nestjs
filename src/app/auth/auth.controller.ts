import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post
} from "@nestjs/common";
import { AuthService, RegisterUserInterface } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {
    console.log(authService);
  }

  /**
   * Singleton
   */
  @Get('user')
  getHello(): string[] {
    return this.authService.findAll();
  }

  @Post('register')
  registerUser(@Body() payload: RegisterUserInterface): RegisterUserInterface {
    if (payload.age <= 0) {
      // throw new HttpException(
      //   'Age should be more than 0',
      //   HttpStatus.FORBIDDEN,
      // );
      throw new BadRequestException('Age should be more than 0');
    }

    return this.authService.registerUser(payload);
  }
}
