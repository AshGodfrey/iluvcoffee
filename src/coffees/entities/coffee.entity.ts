import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() //sql table == 'coffee'
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    readonly name: string;

    @Column()
    readonly brand: string;

    @JoinTable()
    @ManyToMany(type => Flavor, (flavor) => flavor.coffees)
    flavors: string[];
}