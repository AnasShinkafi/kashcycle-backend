import { UserEntity } from "src/user/entity/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity() 
export class LedgerEntity {
    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column({ nullable: false})
    amount: number;

    @Column({ nullable: false})
    slot: number;

    @Column({ nullable: false})
    type: string;

    @CreateDateColumn({ type: 'timestamp'})
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp'})
    updated_at: Date;

    @ManyToOne(() => UserEntity, user => user.id)
    user_id: UserEntity;
}