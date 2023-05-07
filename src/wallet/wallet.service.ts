import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WalletEntity } from './entity/wallet.entity';
import { Repository } from 'typeorm';
import { WalletDto } from './dto/wallet.dto';
import { UserDto } from 'src/user/dto/user.dto';

@Injectable()
export class WalletService {
    constructor(
        @InjectRepository(WalletEntity)
        private walletRepository: Repository<WalletEntity>
    ) {}

    async createWallet( walletDto: WalletDto, user: UserDto) {
        const newWallet = await this.walletRepository.create({
            ...walletDto,
            // user: user
        });
        await this.walletRepository.save(newWallet);
        return newWallet;
    }

    async getWallet(id: number): Promise<WalletEntity> {
        return await this.walletRepository.findOne({ where: {id}});
    }

    async getWallets(): Promise<WalletEntity[]> {
        return this.walletRepository.find();
    } 

    async updateWallet(id: number, walletDto: WalletDto) {
        return await this.walletRepository.update(id, walletDto);
    }

    async deleteWallet(id: number): Promise<any> {
        return await this.walletRepository.delete(id);
    }
}
