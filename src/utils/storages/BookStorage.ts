import { IBook } from "../../domains/IBook";

export class BookStorage {
  private booksStorage: string | null;

  constructor() {
    this.booksStorage = localStorage.getItem("books");
  }

  getBooks(): IBook[] | null {
    if (!this.booksStorage) return null;

    return JSON.parse(this.booksStorage);
  }

  updateBooks(books: IBook[]): void {
    localStorage.setItem("books", JSON.stringify(books));
  }
}
