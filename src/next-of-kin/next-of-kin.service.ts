import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/user/dto/user.dto';
import { Repository } from 'typeorm';
import { NextOfKinDto } from './dto/next-of-kin.dto';
import { NextOfKinEnttity } from './enyity/next-of-kin.entity';

@Injectable()
export class NextOfKinService {
    constructor(
        @InjectRepository(NextOfKinEnttity)
        private nextOfKinRepository: Repository<NextOfKinEnttity>
    ) {}

    async add(nextOfKinDto: NextOfKinDto, user: UserDto) {
        const newNextOfKin = await this.nextOfKinRepository.create({
            ...nextOfKinDto,
            user: user
        });
        await this.nextOfKinRepository.save(newNextOfKin);
        return newNextOfKin;
    }

    async get(id: number): Promise<NextOfKinEnttity> {
        return await this.nextOfKinRepository.findOne({ where: { id }});
    }

    async gets(): Promise<NextOfKinEnttity[]> {
        return await this.nextOfKinRepository.find();
    }

    async update(id: number, nextOfKinDto: NextOfKinDto) {
        return await this.nextOfKinRepository.update(id, nextOfKinDto);
    }

    async delete(id: number): Promise<any> {
        return await this.nextOfKinRepository.delete(id);
    }
}
