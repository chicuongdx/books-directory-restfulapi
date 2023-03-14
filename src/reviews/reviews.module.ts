import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { ReviewsService } from './reviews.service';
import { Module } from '@nestjs/common';
import { ReviewsController } from './reviews.controller';
import { Review } from './review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review])],
  providers: [ReviewsService],
  controllers: [ReviewsController],
})
export class ReviewsModule {}
