import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";

import { Book } from "../utils/Book";
import { IBook } from "../domains/IBook";

export interface IBookContext {
  books: IBook[];
  setBook: (data: IBook[]) => void;
  getBooks: () => IBook[];
  deleteBook: (id: string) => void;
  addBook: (data: IBook) => void;
}

interface ModalProviderProps {
  children: React.ReactNode;
}

const BookContext = createContext<IBookContext>({} as IBookContext);

export const BookProvider: React.FC<ModalProviderProps> = ({ children }) => {
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

    const newBooks = book.delete(id);
    if (!newBooks) return;

    setBook(newBooks);
  };

  const addBook = (data: IBook): void => {
    const book = new Book();

    const addedBook = book.add(data);
    if (!addedBook) return;

    setBook(addedBook);
  };

  const getBooks = (): IBook[] => {
    return books;
  };

  return (
    <BookContext.Provider
      value={{ setBook, getBooks, books, deleteBook, addBook }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => {
  return useContext(BookContext);
};
