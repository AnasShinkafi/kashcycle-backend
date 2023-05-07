import { ProfileEntity } from "src/profile/entity/profile.entity";
import { UserEntity } from "src/user/entity/user.entity";
import { Column, CreateDateColumn, 
    Entity, JoinColumn, 
    OneToOne, PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";

@Entity()
export class NextOfKinEnttity {
    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column({ nullable: false})
    first_name: string;

    @Column({ nullable: false})
    second_name: string;

    @Column({ nullable: false})
    other_name: string;

    @Column({ nullable: false})
    relation: string;

    @Column({ nullable: false, unique:true})
    email: string;

    @Column({ nullable: false})
    phone_number: number;
 
    @CreateDateColumn({ type: 'timestamp'})
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp'})
    updated_at: Date;

    @OneToOne(() => ProfileEntity, profile => profile.next_of_kin_id)
    profile: ProfileEntity;

    @OneToOne(() => UserEntity, userEntity => userEntity.nextOfKin, { onDelete: 'CASCADE' })
    @JoinColumn()
    user: UserEntity;
}