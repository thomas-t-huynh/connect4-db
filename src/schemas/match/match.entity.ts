import {PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, ManyToMany, Entity, JoinTable} from "typeorm";
import { User } from '../user/user.entity';

@Entity()
export class Match extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    player1!: string;

    @Column()
    player2!: string;

    @Column()
    winner!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @ManyToMany(() => User)
    @JoinTable()
    users!: User[];
}