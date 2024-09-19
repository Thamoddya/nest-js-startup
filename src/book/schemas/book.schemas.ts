import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
  FICTION = 'fiction',
  NON_FICTION = 'non-fiction',
  SCIENCE_FICTION = 'science fiction',
  FANTASY = 'fantasy',
}

@Schema({
  timestamps: true,
})
export class Book {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop()
  price: number;

  @Prop()
  category: Category;
}
export const BookSchema = SchemaFactory.createForClass(Book);
