import { Module } from '@nestjs/common';
import { ParticipantsService } from './participants.service';
import { ParticipantsController } from './participants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantsEntity } from './enttity/participants.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    // UserModule,
    TypeOrmModule.forFeature([ParticipantsEntity])],
  providers: [ParticipantsService],
  controllers: [ParticipantsController]
})
export class ParticipantsModule {}
