import { Publisher } from './publisher.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PublisherService {
  constructor(
    @InjectRepository(Publisher)
    private readonly publisherRepository: Repository<Publisher>,
  ) {}

  findAll(): Promise<Publisher[]> {
    return this.publisherRepository.find();
  }

  findOne(publisherId: number): Promise<Publisher> {
    return this.publisherRepository.findOneBy({ publisherID: publisherId });
  }
}
