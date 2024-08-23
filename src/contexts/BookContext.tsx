import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";

import { fetchBooks } from "../utils/fetchBooks";
import { IBook } from "../domains/IBook";

export interface IBookContext {
  books: IBook[];
  setBook: (data: IBook[]) => void;
  getBooks: () => IBook[];
}

interface ModalProviderProps {
  children: React.ReactNode;
}

const BookContext = createContext<IBookContext>({} as IBookContext);

export const BookProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    const fetchedBooks = fetchBooks();

    setBooks(fetchBooks);
  }, []); // Pegar os livros do localstorage

  const setBook = (data: IBook[]) => {
    setBooks(data);
  };

  const getBooks = (): IBook[] => {
    return books;
  };

  return (
    <BookContext.Provider value={{ setBook, getBooks, books }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => {
  return useContext(BookContext);
};
