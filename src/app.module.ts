import { Publisher } from './publishers/publisher.entity';
import { ExcludeNullInterceptor } from './shared/interceptors/exclude-null.interceptor';
import { TransformInterceptor } from './shared/interceptors/transform.interceptor';
import { PublisherModule } from './publishers/publisher.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { Book } from './books/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';
import { AuthGuard } from './shared/guards/auth.guard';
import { Author } from './authors/author.entity';
import { Category } from './categories/category.entity';

@Module({
  imports: [
    BooksModule,
    AuthorsModule,
    CategoriesModule,
    PublisherModule,
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'aneicer123',
      database: 'books_directory',
      entities: [Book, Publisher, Category, Author],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ExcludeNullInterceptor,
    },
    AppService,
  ],
})
export class AppModule {}
