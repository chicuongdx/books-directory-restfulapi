import { Book } from '../books/book.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  reviewID: number;

  @Column()
  bookID: number;

  @Column({ length: 50 })
  reviewerName: string;

  @Column()
  rating: number;

  @Column({ length: 500 })
  reviewText: string;

  // @ManyToOne(() => Book, (book) => book.reviews)
  // book: Book;
}
