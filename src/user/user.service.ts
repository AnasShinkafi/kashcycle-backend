import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entity/user.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) {}
    async createUser(userDto: UserDto) {
        const hashedPassword = await bcrypt.hash(userDto.password, 10)
        try {
            const createdUser = await this.userRepository.save({
                ...userDto,
                password: hashedPassword,
            });
            createdUser.password = hashedPassword;
            return createdUser;
        } catch (error) {
            throw new HttpException("Something went wrong!", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async getUsers(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    async getUser(id: number) {
        const user = await this.userRepository.findOne({ where: { id }});
        if (!user) {
            throw new HttpException('User with this Id does not exist', HttpStatus.NOT_FOUND)
        }
        return user;
    }

    async updateUser(userDto: UserDto, id: number) { 
        const user = await this.userRepository.update(id,userDto);
        return user;
    }

    delete(id: number): Promise<any> {
        const deleteUser = this.userRepository.delete(id);
        return deleteUser;
    }

    async findUser(email: string): Promise<UserEntity> {
        const user = await this.userRepository.findOne({ where: { email }});
        return user;
    }
} 
 