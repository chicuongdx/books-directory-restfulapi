import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users: any;
  constructor() {
    this.users = [
      {
        userid: 1,
        username: 'admin',
        password: 'admin',
      },
    ];
  }

  async findOne(username: string): Promise<any | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
