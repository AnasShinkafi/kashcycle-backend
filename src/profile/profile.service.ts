import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/user/dto/user.dto';
import { Repository } from 'typeorm';
import { ProfileDto } from './dto/profile.dto';
import { ProfileEntity } from './entity/profile.entity';

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(ProfileEntity)
        private profileRepository: Repository<ProfileEntity>
    ) {}

    async create( profileDto: ProfileDto, user: UserDto) {
        const newProfile = this.profileRepository.create({
            ...profileDto,
            user: user
        });
        await this.profileRepository.save(newProfile);
        return newProfile
    }

    async getProfile(id: number): Promise<ProfileEntity> {
        const profile = await this.profileRepository.findOne({ where: { id }});
        return profile;
    }

    async getProfiles(): Promise<ProfileEntity[]> {
        const profiles = await this.profileRepository.find();
        return profiles;
    }

    async update(id: number, editeDto: ProfileDto) {
        const updatedProfile = await this.profileRepository.update(id, editeDto);
        return updatedProfile;
    }
    
    async delete(id: number): Promise<any> {
        const deletedProfile =await this.profileRepository.delete(id);
        return deletedProfile;
    }
}
