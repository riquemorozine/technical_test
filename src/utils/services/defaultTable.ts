import { IAuthors } from "../../domains/IAuthors";
import { IBook } from "../../domains/IBook";

export const defaultAuthors: IAuthors[] = [
  {
    id: "1",
    name: "Robert C. Martin",
    email: "robertcmartin@email.com",
  },
  {
    id: "2",
    name: "Martin Fowler",
    email: "martinfowler@email.com",
  },
];

export const defaultBooks: IBook[] = [
  {
    id: "1",
    name: "Clean Code",
    pages: 464,
    author_id: "1",
  },
  {
    id: "2",
    name: "Refactoring",
    pages: 478,
    author_id: "2",
  },
  {
    id: "3",
    name: "Domain-Driven Design",
    pages: 560,
    author_id: "1",
  },
];
