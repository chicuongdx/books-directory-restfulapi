import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './shared/filters/all-exceptions.filter';
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';
import { AuthGuard } from './shared/guards/auth.guard';
import { logger } from './shared/middlewares/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(logger);
  app.useGlobalFilters(new HttpExceptionFilter());
  const httpAdapter = app.getHttpAdapter();
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new AuthGuard());

  await app.listen(3000);
}
bootstrap();
