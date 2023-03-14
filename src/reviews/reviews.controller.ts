import { ReviewsService } from './reviews.service';
import { Controller, Get } from '@nestjs/common';
import { Review } from './review.entity';

@Controller()
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  findAll(): Promise<Review[]> {
    return this.reviewsService.findAll();
  }

  @Get('book/:bookID')
  findForBook(bookID: number): Promise<Review[]> {
    return this.reviewsService.findForBook(bookID);
  }
}
