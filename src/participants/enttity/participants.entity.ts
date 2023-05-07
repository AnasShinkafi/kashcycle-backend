import { UserEntity } from "src/user/entity/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Month } from "../month.enum";


@Entity()
export class ParticipantsEntity {
    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column({ nullable: false})
    image: string;

    @Column({ nullable: false})
    name: string;

    @Column({ nullable: false, default: true})
    collect: boolean;

    @Column({ unique: true})
    month: Month;

    @OneToOne(() => UserEntity, userEntity => userEntity.participant, { onDelete: 'CASCADE'})
    @JoinColumn()
    user: UserEntity;
}