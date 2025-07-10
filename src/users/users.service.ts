import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository : Repository<User>
  ){}
  async create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);
    const saveResult = await this.usersRepository.save(newUser);
    return plainToInstance(User, saveResult)

  }

  async findAll(): Promise<User[]> {
    const users = await this.usersRepository.find();
    return plainToInstance(User, users);
    //return this.usersRepository.find();
  }

}
