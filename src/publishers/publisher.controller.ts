import { PublisherService } from './publisher.service';
import { Controller, Get } from '@nestjs/common';
import { Publisher } from './publisher.entity';

@Controller('publishers')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @Get()
  async findAll(): Promise<Publisher[]> {
    return this.publisherService.findAll();
  }
}
