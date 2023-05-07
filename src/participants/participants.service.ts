import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/user/dto/user.dto';
// import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { ParticipantsDto } from './dto/participants.dto';
import { ParticipantsEntity } from './enttity/participants.entity';

@Injectable()
export class ParticipantsService {
    constructor(
        @InjectRepository(ParticipantsEntity)
        private participantsRepository: Repository<ParticipantsEntity>,
        // private userService: UserService
    ) {}

    async create( participantsDto: ParticipantsDto, user: UserDto) {
        const newMember = await this.participantsRepository.create({
            ...participantsDto,
            user: user
        });
        await this.participantsRepository.save(newMember);
        return newMember;
    }

    async get(id:number):Promise<ParticipantsEntity> {
        return await this.participantsRepository.findOne({ where: { id }})
    }

    async gets(): Promise<ParticipantsEntity[]> {
        return await this.participantsRepository.find();
    }

    async update(id: number, participantsDto: ParticipantsDto) {
        return await this.participantsRepository.update(id, participantsDto);
    }

    async delete(id: number) {
        return await this.participantsRepository.delete(id);
    }

}
