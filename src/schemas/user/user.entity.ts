import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn} from "typeorm";
// import { Match } from "../match/match.entity";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username!: string;

    @Column()
    password!: string;

    @Column({ unique: true })
    email!: string;

    @CreateDateColumn()
    createdAt!: Date;
}
