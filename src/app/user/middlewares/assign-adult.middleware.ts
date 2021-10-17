import { Injectable, NestMiddleware } from '@nestjs/common';
import { RegisterUserInterface } from '../user.service';

@Injectable()
export class AssignAdultMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const user: RegisterUserInterface = req.body;
    if (user.age >= 18) {
      user.isAdult = true;
    } else {
      user.isAdult = false;
    }
    next();
  }
}
