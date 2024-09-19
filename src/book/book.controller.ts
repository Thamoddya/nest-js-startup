import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schemas';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async findAllBooks(): Promise<Book[]> {
    return this.bookService.findAllBooks();
  }

  @Post()
  async createBook(@Body() book: CreateBookDto): Promise<Book> {
    return this.bookService.createBook(book);
  }

  @Get(':id')
  async findyId(@Param('id') id: string): Promise<Book> {
    return this.bookService.findyId(id);
  }
}
