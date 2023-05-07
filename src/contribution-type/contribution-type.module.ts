import { Module } from '@nestjs/common';
import { ContributionTypeController } from './contribution-type.controller';
import { ContributionTypeService } from './contribution-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContributionEntity } from './entity/contribution-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContributionEntity])],
  controllers: [ContributionTypeController],
  providers: [ContributionTypeService]
})
export class ContributionTypeModule {}
