import { UserEntity } from "src/user/entity/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categories } from "../categorie.enum";

@Entity()
export class CategoryEntity {
    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column({ type: 'enum', enum: Categories, default: Categories.Daily})
    category: Categories;

    @Column({ nullable: false})
    slot: number;

    @Column({ nullable: false})
    taken: number;

    @Column({ nullable: false})
    remaining: number;
 
    @CreateDateColumn({ type: Date})
    created_at: Date;

    @ManyToOne(() => UserEntity, userEntity => userEntity.category, { onDelete: 'SET NULL'})
    @JoinColumn()
    user: UserEntity;
    // user: UserEntity[];
}