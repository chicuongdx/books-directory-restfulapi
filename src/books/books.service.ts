import { Book } from './book.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  findOne(bookId: number): Promise<Book> {
    return this.booksRepository.findOneBy({ bookID: bookId });
  }

  createOne(book: Book): Promise<Book> {
    return this.booksRepository.save(book);
  }

  updateOne(bookId: number, book: Book): Promise<Book> {
    return this.booksRepository.save(book);
  }
}
