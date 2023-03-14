import { Review } from './review.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}

  findAll(): Promise<Review[]> {
    return this.reviewRepository.find();
  }

  findForBook(bookID: number): Promise<Review[]> {
    return this.reviewRepository.find({ where: { bookID } });
  }
}
