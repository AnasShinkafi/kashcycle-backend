import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContributionEntity } from './entity/contribution-type.entity';
import { Repository } from 'typeorm';
import { ContributionTypeDto } from './dto/contribution-type.dt';
import { UserDto } from 'src/user/dto/user.dto';

@Injectable()
export class ContributionTypeService {
    constructor(
        @InjectRepository(ContributionEntity)
        private contributionTypeRepository: Repository<ContributionEntity>
    ) {}

    async create(contribution: ContributionTypeDto, user: UserDto) {
        const newContribution = await this.contributionTypeRepository.create({
            ...contribution,
            user: user
        });
        await this.contributionTypeRepository.save(newContribution);
        return newContribution;
    }

    async get(id: number): Promise<ContributionEntity> {
        return await this.contributionTypeRepository.findOne({ where: {id}});
    }

    async gets(): Promise<ContributionEntity[]> {
        return await this.contributionTypeRepository.find();
    }

    async update(id: number, contributionDto: ContributionTypeDto) {
        return await this.contributionTypeRepository.update(id, contributionDto);
    }

    async delete(id: number): Promise<any> {
        return await this.contributionTypeRepository.delete(id);
    }
 }
