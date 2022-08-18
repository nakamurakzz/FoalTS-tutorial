// import { hashPassword } from '@foal/core';
import { BaseEntity, Column ,Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  text: string;
}
