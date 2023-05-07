import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ProfileEntity {
    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column({ nullable: false })
    amount: number;

    @CreateDateColumn({})
    created_at: Date;

    @UpdateDateColumn({})
    updated_at: Date;
}