import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  BeforeInsert,
} from 'typeorm';
import { Photo } from '../photos/photo.entity';
const bcrypt = require('bcrypt');

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isAdmin: boolean;

  @Column({ nullable: true })
  timezone?: string;

  @Column({ nullable: true })
  confirmationToken?: string;

  @Column({ nullable: true })
  confirmedAt?: Date;

  @Column({ nullable: true })
  passwordResetToken?: string;

  @Column()
  password: string;

  @OneToOne(type => Photo)
  @JoinColumn()
  picture: Photo;

  @OneToMany(
    type => Photo,
    photo => photo.user,
  )
  photos: Photo[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
