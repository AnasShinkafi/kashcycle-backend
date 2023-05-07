import { UserEntity } from "src/user/entity/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ContributionEntity {
    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column({ nullable: false })
    number_of_users: number;

    @Column({ nullable: false })
    payment_period: string;

    @Column({nullable: false })
    duration: number;

    @Column({ type: 'date'})
    start_date: Date;

    @Column({ type: 'date'})
    end_date: Date;

    @Column({ nullable: false })
    amount: number;

    @CreateDateColumn({})
    created_at: Date;

    @UpdateDateColumn({})
    updated_at: Date;

    @OneToOne(() => UserEntity, userEntity => userEntity.id, { onDelete: 'CASCADE'})
    @JoinColumn()
    user: UserEntity;

    // @OneToOne(() => NextOfKinEnttity, nextOfKinEntity => nextOfKinEntity.id, { onDelete: 'CASCADE'})
    // @JoinColumn()
    // next_of_kin_id: NextOfKinEnttity;
}