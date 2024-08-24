import { IBook } from "../../domains/IBook";
import { BookStorage } from "../storages/BookStorage";

export class Book {
  private bookStorage: BookStorage;

  constructor() {
    this.bookStorage = new BookStorage();
  }

  fetch(): IBook[] {
    const books = this.bookStorage.getBooks();

    console.log(books);

    if (!books) {
      const exampleBook = {
        author_id: "1",
        id: "1",
        name: "example book",
        pages: 12,
      };

      this.bookStorage.updateBooks([exampleBook]);
      return [exampleBook];
    }

    return books;
  }

  delete(id: string): IBook[] | void {
    const books = this.bookStorage.getBooks();
    if (!books) return;

    const bookExist = books.some((book: IBook) => book.id === id);
    if (!bookExist) return;

    const deletedBook = books.filter((book: IBook) => book.id != id);
    this.bookStorage.updateBooks(deletedBook);

    return deletedBook;
  }

  add(data: IBook): IBook[] | void {
    const books = this.bookStorage.getBooks();

    if (!books) return;

    const isDuplicate = books.some(
      (book: IBook) =>
        book.author_id === data.author_id && book.name === data.name
    );

    if (isDuplicate) return;

    this.bookStorage.updateBooks([...books, data]);

    return [...books, data];
  }

  getAllBooksFromAuthor(id: string): IBook[] | null {
    const books = this.bookStorage.getBooks();

    if (!books) return null;

    const findBooks = books.filter((book) => book.author_id === id);
    if (!findBooks) return null;

    return findBooks;
  }
}
