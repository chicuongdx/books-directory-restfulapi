import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
  HttpException,
} from '@nestjs/common';
import { catchError, map, throwError } from 'rxjs';

export interface Response<T> {
  success: boolean;
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map((data) => ({
        success: true, // set success to true if the operation is successful
        data,
      })),
      catchError((error) =>
        throwError(() => new HttpException(error.message, error.status)),
      ),
    );
  }
}
