import { Module } from '@nestjs/common';
import { LedgerController } from './ledger.controller';
import { LedgerService } from './ledger.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LedgerEntity } from './entity/ledger.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LedgerEntity])],
  controllers: [LedgerController],
  providers: [LedgerService]
})
export class LedgerModule {}
