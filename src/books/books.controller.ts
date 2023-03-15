import { CreateBookDto } from './dto/create-book.dto';
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './book.entity';
import { BooksService } from './books.service';
import { Body } from '@nestjs/common/decorators';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe)
    bookId: number,
  ): Promise<Book> {
    return this.booksService.findOne(bookId);
  }

  @Post()
  async createOne(@Body() book: CreateBookDto): Promise<Book> {
    return this.booksService.createOne(book);
  }

  @Put()
  async updateOne(@Param('id') bookId: number, book: Book): Promise<Book> {
    return this.booksService.updateOne(bookId, book);
  }
}
