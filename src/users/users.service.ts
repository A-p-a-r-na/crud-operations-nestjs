import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [{ id: 1, email: 'john@example.com', name: 'John Doe' }];
  
  create(createUserDto: CreateUserDto) {
    return this.users.push(createUserDto);
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.users.map(user => user.id === id ? { ...user, ...updateUserDto } : user)  ;
  }

  remove(id: number) {
    return this.users = this.users.filter(user => user.id !== id) ;
  }
}
