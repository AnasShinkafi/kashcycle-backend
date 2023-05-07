import { Module } from '@nestjs/common';
import { NextOfKinService } from './next-of-kin.service';
import { NextOfKinController } from './next-of-kin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NextOfKinEnttity } from './enyity/next-of-kin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NextOfKinEnttity])],
  providers: [NextOfKinService],
  controllers: [NextOfKinController]
})
export class NextOfKinModule {}
