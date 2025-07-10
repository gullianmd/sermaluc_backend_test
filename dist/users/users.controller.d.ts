import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersController {
    private userRepository;
    private readonly usersService;
    constructor(userRepository: Repository<User>, usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
}
