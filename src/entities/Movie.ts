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

  @Column({
    type: 'varchar',
    length: 255,
  })
  title!: string;

  @Column({
    type: 'text',
  })
  synopsis!: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  genre!: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  director!: string;

  @Column({
    type: 'integer',
  })
  releaseYear!: number;

  @Column({
    type: 'integer',
  })
  duration!: number;

  @Column({
    type: 'decimal',
    precision: 3,
    scale: 1,
    default: 0,
    transformer: {
      to(value: number) {
        return value;
      },
      from(value: string) {
        return Number(value);
      },
    },
  })
  rating!: number;

  @Column({
    type: 'varchar',
    length: 500,
    default: '',
  })
  imageUrl!: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt!: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt!: Date;
}