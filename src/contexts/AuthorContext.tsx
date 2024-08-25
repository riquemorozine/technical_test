import { createContext, useContext, useEffect, useState } from "react";

import { Author } from "../utils/services/AuthorService";

import { IAuthors } from "../domains/IAuthors";

export interface IAuthorContext {
  authors: IAuthors[];
  setAuthor: (data: IAuthors[]) => void;
  getAuthors: () => IAuthors[];
  deleteAuthor: (id: string) => void;
  addAuthor: (data: IAuthors) => void;
  getAuthorById: (id: string) => IAuthors | undefined;
}

interface AuthorProviderProps {
  children: React.ReactNode;
}

const AuthorContext = createContext<IAuthorContext>({} as IAuthorContext);

export const AuthorProvider: React.FC<AuthorProviderProps> = ({ children }) => {
  const [authors, setAuthors] = useState<IAuthors[]>([]);

  useEffect(() => {
    const author = new Author();
    const fetchedAuthor = author.fetch();

    setAuthor(fetchedAuthor);
  }, []);

  const setAuthor = (data: IAuthors[]) => {
    setAuthors(data);
  };

  const deleteAuthor = (id: string): void => {
    const author = new Author();

    const actualizedAuthors = author.delete(id);
    if (!actualizedAuthors) return;

    setAuthors(actualizedAuthors);
  };

  const addAuthor = (data: IAuthors): void => {
    const author = new Author();

    const actualizedAuthors = author.add(data);
    if (!actualizedAuthors) return;

    setAuthors(actualizedAuthors);
  };

  const getAuthorById = (id: string): IAuthors | undefined => {
    return authors.find((author) => author.id === id);
  };

  const getAuthors = (): IAuthors[] => {
    return authors;
  };

  return (
    <AuthorContext.Provider
      value={{
        setAuthor,
        deleteAuthor,
        addAuthor,
        getAuthors,
        getAuthorById,
        authors,
      }}
    >
      {children}
    </AuthorContext.Provider>
  );
};

export const useAuthor = () => {
  return useContext(AuthorContext);
};
