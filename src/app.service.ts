import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTimeout(): Promise<string> {
    return new Promise<string>((res) => {
      setTimeout(() => {
        res('Hello');
      }, 3000);
    });
  }
}
