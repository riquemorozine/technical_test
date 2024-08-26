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
    description:
      "Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees.",
  },
  {
    id: "2",
    name: "Refactoring",
    pages: 478,
    author_id: "2",
    description:
      "As the application of object technology--particularly the Java programming language--has become commonplace, a new problem has emerged to confront the software development community. Significant numbers of poorly designed programs have been created by less-experienced developers, resulting in applications that are inefficient and hard to maintain and extend.",
  },
  {
    id: "3",
    name: "Domain-Driven Design",
    pages: 560,
    author_id: "1",
    description:
      "Domain-Driven Design fills that need. This is not a book about specific technologies. It offers readers a systematic approach to domain-driven design, presenting an extensive set of design best practices, experience-based techniques, and fundamental principles that facilitate the development of software projects facing complex domains.",
  },
];
