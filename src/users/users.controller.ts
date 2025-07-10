import { Controller, Get, Post, Body, Patch, Param, Delete, ConflictException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly usersService: UsersService
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    
    const { email } = createUserDto;

    const existingUser = await this.userRepository.findOne({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('El correo ya está registrado');
    }
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

}
