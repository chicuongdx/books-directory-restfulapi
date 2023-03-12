import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';
import { Book } from '../books/book.entity';

@Entity('categories')
export class Category {
  @PrimaryColumn()
  categoryID: number;

  @Column({ length: 50 })
  categoryName: string;

  @OneToMany(() => Book, (book) => book.category)
  books: Book[];
}
