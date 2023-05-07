import { CategoryEntity } from "src/category/entity/category.entity";
import { NextOfKinEnttity } from "src/next-of-kin/enyity/next-of-kin.entity";
import { ProfileEntity } from "src/profile/entity/profile.entity";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Role } from "../role.enum";
import { ParticipantsEntity } from "src/participants/enttity/participants.entity";
import { LedgerEntity } from "src/ledger/entity/ledger.entity";
import { WalletEntity } from "src/wallet/entity/wallet.entity"
import { ContributionEntity } from "src/contribution-type/entity/contribution-type.entity";

@Entity() 
export class UserEntity {
    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column({ nullable: false })
    first_name: string;

    @Column({ nullable: false })
    last_name: string;

    @Column({ nullable: false, unique: true, })
    email: string;

    @Column({ default: '12345'})
    password: string;

    @Column({ type: 'enum', enum: Role, default: Role.User})
    role: Role;

    @CreateDateColumn({ type: 'timestamp'})
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updated_at: Date;

    @OneToMany(() => CategoryEntity, category => category.user)
    category: CategoryEntity[];

    @OneToMany(() => ContributionEntity, contribution => contribution.user)
    contribution: ContributionEntity[];

    @OneToOne(() => NextOfKinEnttity, next => next.user)
    nextOfKin: NextOfKinEnttity;

    @OneToOne(() => ProfileEntity, profile => profile.user)
    profile: ProfileEntity;

    @OneToOne(() => ParticipantsEntity, participant => participant.user)
    participant: ParticipantsEntity;

    @OneToMany(() => LedgerEntity, ledger => ledger.user_id)
    ledger: LedgerEntity;

    @OneToOne(() => WalletEntity, walletEntity => walletEntity.user)
    wallet: WalletEntity;
}