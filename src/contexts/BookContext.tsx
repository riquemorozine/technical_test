import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";

import { Book } from "../utils/services/BookService";
import { IBook } from "../domains/IBook";

export interface IBookContext {
  books: IBook[];
  setBook: (data: IBook[]) => void;
  getBooks: () => IBook[];
  deleteBook: (id: string) => void;
  addBook: (data: IBook) => void;
  getAllBooksFromAuthor: (id: string) => IBook[] | null;
}

interface BookProviderProps {
  children: React.ReactNode;
}

const BookContext = createContext<IBookContext>({} as IBookContext);

export const BookProvider: React.FC<BookProviderProps> = ({ children }) => {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    const book = new Book();
    const fetchedBooks = book.fetch();

    setBooks(fetchedBooks);
  }, []);

  const setBook = (data: IBook[]) => {
    setBooks(data);
  };

  const deleteBook = (id: string): void => {
    const book = new Book();

    const actualizedBooks = book.delete(id);
    if (!actualizedBooks) return;

    setBook(actualizedBooks);
  };

  const addBook = (data: IBook): void => {
    const book = new Book();

    const actualizedBooks = book.add(data);
    if (!actualizedBooks) return;

    setBook(actualizedBooks);
  };

  const getAllBooksFromAuthor = (id: string): IBook[] | null => {
    const book = new Book();

    const findAuthorBooks = book.getAllBooksFromAuthor(id);
    if (!findAuthorBooks) return null;

    return findAuthorBooks;
  };

  const getBooks = (): IBook[] => {
    return books;
  };

  return (
    <BookContext.Provider
      value={{
        setBook,
        getBooks,
        books,
        deleteBook,
        addBook,
        getAllBooksFromAuthor,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => {
  return useContext(BookContext);
};
