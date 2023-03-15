export class CreateBookDto {
  title: string;
  authorId: number;
  publisherId: number;
  categoryId: number;
  isbn: string;
  price: number;
  publishDate: Date;
}
