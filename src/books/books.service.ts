import { AuthorsService } from './../authors/authors.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './book.entity';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesService } from 'src/categories/categories.service';
import { PublisherService } from 'src/publishers/publisher.service';
import { Author } from 'src/authors/author.entity';
import { Category } from 'src/categories/category.entity';
import { Publisher } from 'src/publishers/publisher.entity';

@Injectable()
export class BooksService {
  constructor(
    private authorsRepository: AuthorsService,
    private categoriesService: CategoriesService,
    private publisherService: PublisherService,
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  findOne(bookId: number): Promise<Book> {
    return this.booksRepository.findOneBy({ bookID: bookId });
  }

  async createOne(createBookDto: CreateBookDto): Promise<Book> {
    const book = new Book();
    book.title = createBookDto.title;
    book.author = await this.authorsRepository.findOne(createBookDto.authorId);
    book.publisher = await this.publisherService.findOne(
      createBookDto.publisherId,
    );

    book.category = await this.categoriesService.findOne(
      createBookDto.categoryId,
    );
    book.ISBN = createBookDto.isbn;
    book.price = createBookDto.price;
    book.publishDate = createBookDto.publishDate;

    return this.booksRepository.save(book);
  }

  updateOne(bookId: number, book: Book): Promise<Book> {
    return this.booksRepository.save(book);
  }
}
