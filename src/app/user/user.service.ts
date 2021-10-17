import { Injectable } from '@nestjs/common';
export interface RegisterUserInterface {
  name: string;
  age: number;
  notified: boolean | false;
  isAdult: boolean | false;
}

@Injectable()
export class UserService {
  private users: RegisterUserInterface[] = [];

  registerUser(payload: RegisterUserInterface): RegisterUserInterface {
    this.users.push(payload);

    if (payload.age >= 13) {
      this.addToHighSchool(payload);
      return payload;
    }
    this.addToKindergarten(payload);
    return payload;
  }

  create(payload: RegisterUserInterface): RegisterUserInterface {
    this.users.push(payload);

    if (payload.age >= 13) {
      this.addToHighSchool(payload);
      return payload;
    }
    this.addToKindergarten(payload);
    return payload;
  }

  findAll(): RegisterUserInterface[] {
    return this.users;
  }

  findNotificationEnable() {
    return this.findAll().filter(
      (user: RegisterUserInterface) => user.notified,
    );
  }

  private addToHighSchool(payload) {
    console.log('High school: ' + payload.name);
  }

  private addToKindergarten(payload) {
    console.log('KG:' + payload.name);
  }
}
