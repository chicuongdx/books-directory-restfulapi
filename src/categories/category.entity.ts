import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Book } from '../books/book.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  categoryID: number;

  @Column({ length: 50 })
  categoryName: string;

  @OneToMany(() => Book, (book) => book.category)
  books: Book[];
}
