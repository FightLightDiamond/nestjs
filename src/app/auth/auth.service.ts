import { Injectable } from '@nestjs/common';

export interface RegisterUserInterface {
  name: string;
  age: number;
}

@Injectable()
export class AuthService {
  private user = [];
  registerUser(payload: RegisterUserInterface): RegisterUserInterface {
    this.user.push(payload);

    if (payload.age >= 13) {
      this.addToHighSchool(payload);
      return payload;
    }
    this.addToKindergarten(payload);
    return payload;
  }

  findAll(): string[] {
    return this.user;
  }

  private addToHighSchool(payload) {
    console.log('High school: ' + payload.name);
  }

  private addToKindergarten(payload) {
    console.log('KG:' + payload.name);
  }
}
