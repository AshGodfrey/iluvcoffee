import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() //sql table == 'coffee'
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    readonly name: string;

    @Column()
    readonly brand: string;

    @Column('json', { nullable: true })
    readonly flavors: string[];
}