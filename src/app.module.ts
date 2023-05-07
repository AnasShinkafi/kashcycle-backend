import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { NextOfKinModule } from './next-of-kin/next-of-kin.module';
import { CategoryModule } from './category/category.module';
import { UserEntity } from './user/entity/user.entity';
import { ProfileEntity } from './profile/entity/profile.entity';
import { CategoryEntity } from './category/entity/category.entity';
import { ParticipantsModule } from './participants/participants.module';
import { LedgerModule } from './ledger/ledger.module';
import { ContributionTypeModule } from './contribution-type/contribution-type.module';
import { WalletModule } from './wallet/wallet.module';
import { BankModule } from './bank/bank.module';
import { NextOfKinEnttity } from './next-of-kin/enyity/next-of-kin.entity';
import { WalletEntity } from './wallet/entity/wallet.entity';
import { ParticipantsEntity } from './participants/enttity/participants.entity';
import { LedgerEntity } from './ledger/entity/ledger.entity';
import { ContributionEntity } from './contribution-type/entity/contribution-type.entity';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: +configService.get<number>('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
        entities: [
          UserEntity,
          ProfileEntity,
          CategoryEntity, 
          NextOfKinEnttity,
          WalletEntity, 
          ParticipantsEntity,
          LedgerEntity,
          ContributionEntity],
        autoLoadEntities: true,
        synchronize: true,
      }), 
      inject: [ConfigService],
    }),
    UserModule,
    LoginModule,
    AuthModule,
    ProfileModule,
    NextOfKinModule,
    CategoryModule,
    ParticipantsModule,
    LedgerModule,
    ContributionTypeModule,
    WalletModule,
    BankModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
