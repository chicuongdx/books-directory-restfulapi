import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';
import { Book } from '../books/book.entity';

@Entity('authors')
export class Author {
  @PrimaryColumn()
  authorID: number;

  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
