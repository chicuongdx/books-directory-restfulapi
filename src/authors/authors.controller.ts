import { Author } from './author.entity';
import { AuthorsService } from './authors.service';
import { Controller, Get } from '@nestjs/common';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Get()
  async findAll(): Promise<Author[]> {
    return this.authorsService.findAll();
  }
}
