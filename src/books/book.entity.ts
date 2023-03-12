import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Author } from '../authors/author.entity';
import { Publisher } from '../publishers/publisher.entity';
import { Category } from '../categories/category.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  bookID: number;

  @Column({ length: 100 })
  title: string;

  @ManyToOne(() => Author, { eager: true })
  author: Author;

  @ManyToOne(() => Publisher, { eager: true })
  publisher: Publisher;

  @ManyToOne(() => Category, { eager: true })
  category: Category;

  @Column({ length: 13 })
  ISBN: string;

  @Column('decimal', { precision: 8, scale: 2 })
  price: number;

  @Column({ type: 'date' })
  publishDate: Date;
}
