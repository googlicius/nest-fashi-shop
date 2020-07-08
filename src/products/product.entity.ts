import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  sku: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  unitCost: number;

  @Column({ type: 'json' })
  attributes: string;
}
