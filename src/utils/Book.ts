import { IBook } from "../domains/IBook";

export class Book {
  fetch(): IBook[] {
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

  delete(id: string): IBook[] | void {
    const books = localStorage.getItem("books");

    if (!books) return;
    const parsedBooks = JSON.parse(books);

    const bookExist = parsedBooks.some((book: IBook) => book.id === id);
    if (!bookExist) return;

    const deletedBook = parsedBooks.filter((book: IBook) => book.id != id);

    localStorage.setItem("books", JSON.stringify(deletedBook));

    return deletedBook;
  }

  add(data: IBook): IBook[] | void {
    const books = localStorage.getItem("books");

    if (!books) return;

    const parsedBook = JSON.parse(books);

    const isDuplicate = parsedBook.some(
      (book: IBook) =>
        book.author_id === data.author_id && book.name === data.name
    );
    if (isDuplicate) return;

    const createdBook = [...parsedBook, data];

    localStorage.setItem("books", JSON.stringify(createdBook));

    return createdBook;
  }
}
