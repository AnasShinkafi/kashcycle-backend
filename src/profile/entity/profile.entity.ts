import { NextOfKinEnttity } from "src/next-of-kin/enyity/next-of-kin.entity";
import { UserEntity } from "src/user/entity/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ProfileEntity {
    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column({nullable: false})
    username: string;

    @Column({nullable: false})
    marital_status: string;

    @Column({nullable: false})
    occupation: string;

    @Column({nullable: false})
    picture: string;

    @Column({nullable: false})
    gender: string;

    @Column({nullable: false})
    monthly_income: number;


    // @Column({nullable: false})
    // account_number: number;

    @CreateDateColumn({})
    created_at: Date;

    @UpdateDateColumn({})
    updated_at: Date;

    @OneToOne(() => UserEntity, userEntity => userEntity.id, { onDelete: 'CASCADE'})
    @JoinColumn()
    user: UserEntity;

    @OneToOne(() => NextOfKinEnttity, nextOfKinEntity => nextOfKinEntity.id, { onDelete: 'CASCADE'})
    @JoinColumn()
    next_of_kin_id: NextOfKinEnttity;
}