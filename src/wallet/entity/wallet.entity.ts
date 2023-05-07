import { UserEntity } from "src/user/entity/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class WalletEntity {
    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column({ nullable: false})
    username: string;

    @Column({ nullable: false })
    monthly_income: number;

    @CreateDateColumn({})
    created_at: Date;

    @UpdateDateColumn({})
    updated_at: Date;

    @OneToOne(() => UserEntity, userEntity => userEntity.wallet, { onDelete: 'CASCADE'})
    @JoinColumn()
    user: UserEntity;
}