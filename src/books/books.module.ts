import { Category } from './../categories/category.entity';
import { Author } from './../authors/author.entity';
import { PublisherService } from './../publishers/publisher.service';
import { CategoriesService } from './../categories/categories.service';
import { AuthorsService } from './../authors/authors.service';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Book } from './book.entity';
import { Publisher } from 'src/publishers/publisher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Author, Category, Publisher])],
  controllers: [BooksController],
  providers: [
    BooksService,
    AuthorsService,
    CategoriesService,
    PublisherService,
  ],
  exports: [BooksService],
})
export class BooksModule {}
