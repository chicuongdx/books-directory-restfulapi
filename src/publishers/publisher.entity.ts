import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Book } from '../books/book.entity';

@Entity()
export class Publisher {
  @PrimaryGeneratedColumn()
  publisherID: number;

  @Column({ length: 50 })
  publisherName: string;

  @OneToMany(() => Book, (book) => book.publisher)
  books: Book[];
}
