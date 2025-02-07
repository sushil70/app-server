import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to App';
  }

  login() {
    return 'Login';
  }

  register() {
    return 'Register';
  }
}
