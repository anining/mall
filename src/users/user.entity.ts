import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  balance: number;

  @Column()
  phone: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ default: 'customer' })
  role: string;
}
