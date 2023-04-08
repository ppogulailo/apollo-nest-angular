import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { CreateUserInput } from '../inputs /create-user.input';
import { UpdateUserInput } from '../inputs /update-user.input';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser(createUserInput: CreateUserInput): Promise<UserEntity>;
    getOneUser(id: number): Promise<UserEntity>;
    getAllUsers(): Promise<UserEntity[]>;
    removeUser(id: number): Promise<number>;
    updateUser(updateUserInput: UpdateUserInput): Promise<UserEntity>;
}
