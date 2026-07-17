import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column('text')
  synopsis!: string;

  @Column()
  genre!: string;

  @Column()
  director!: string;

  @Column({
    type: 'integer'
  })
  releaseYear!: number;

  @Column({
    type: 'integer'
  })
  duration!: number;

  @Column({
    type: 'decimal',
    precision: 3,
    scale: 1,
    default: 0,
  })
  rating!: number;

  @Column({default: ''})
  imageUrl!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}