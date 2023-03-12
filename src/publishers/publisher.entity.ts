import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';
import { Book } from '../books/book.entity';

@Entity('publishers')
export class Publisher {
  @PrimaryColumn()
  publisherID: number;

  @Column({ length: 50 })
  publisherName: string;

  @OneToMany(() => Book, (book) => book.publisher)
  books: Book[];
}
