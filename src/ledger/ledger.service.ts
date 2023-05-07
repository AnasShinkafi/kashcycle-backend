import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LedgerEntity } from './entity/ledger.entity';
import { Repository } from 'typeorm';
import { LedgerDto } from './dto/ledger.dto';
import { UserDto } from 'src/user/dto/user.dto';

@Injectable()
export class LedgerService {
    constructor(
        @InjectRepository(LedgerEntity)
        private ledgerRepository: Repository<LedgerEntity>
    ) {}

    async createLedger(ledgerDto: LedgerDto, user: UserDto) {
        const newLedger = await this.ledgerRepository.create({
            ...ledgerDto,
            user_id: user
        });
        await this.ledgerRepository.save(newLedger);
        return newLedger;
    }

    async getLedger(id: number): Promise<LedgerEntity> {
        return await this.ledgerRepository.findOne({ where: {id}});
    }

    async getLedgers(): Promise<LedgerEntity[]> {
        return await this.ledgerRepository.find();
    }

    async updateLedger(id: number, ledgerDto: LedgerDto) {
        return await this.ledgerRepository.update(id, ledgerDto)
    }

    async deleteLedger(id: number): Promise<any> {
        return await this.ledgerRepository.delete(id);
    }
}
