import { Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     Logger.log(req.url, 'Request URL');
//     next();
//   }
// }

export function logger(req: Request, res: Response, next: NextFunction) {
  Logger.log(req.url, 'Request URL');
  Logger.log(req.method, 'Request Method');
  Logger.log(req.headers, 'Request Headers');
  Logger.log(req.body, 'Request Body');

  next();
}
