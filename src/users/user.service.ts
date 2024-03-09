import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAllUsers(): string {
    return 'These are all users';
  }
}
