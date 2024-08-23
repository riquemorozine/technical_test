import { IBook } from "../domains/IBook";

export class Book {
  fetchBooks(): IBook[] {
    const books = localStorage.getItem("books");

    if (!books) {
      const exampleBook = {
        author_id: "1",
        id: "1",
        name: "example book",
        pages: 12,
      };

      localStorage.setItem("books", JSON.stringify([exampleBook]));
      return [exampleBook];
    }

    return JSON.parse(books);
  }

  deleteBook(id: string): void {
    const books = localStorage.getItem("books");

    if (!books) return;

    const parsedBooks = JSON.parse(books);
    const deletedBook = parsedBooks.filter((book: IBook) => book.id != id);

    localStorage.setItem("books", JSON.stringify(deletedBook));
  }

  addBook(data: IBook): void {
    const books = localStorage.getItem("books");

    if (!books) return;

    const parsedBook = JSON.parse(books);
    localStorage.setItem("books", JSON.stringify([...parsedBook, data]));
  }
}
