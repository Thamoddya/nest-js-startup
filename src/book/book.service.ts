import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schemas';
import * as mongoose from 'mongoose';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private bookModel: mongoose.Model<Book>,
  ) {}

  async findAllBooks(): Promise<Book[]> {
    return await this.bookModel.find();
  }

  async createBook(book: Book): Promise<Book> {
    let response = await this.bookModel.create(book);
    return response;
  }

  async findyId(id: String): Promise<Book> {
    let response = await this.bookModel.findById(id);
    return response;
  }
}
