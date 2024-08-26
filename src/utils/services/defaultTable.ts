import { IAuthors } from "../../domains/IAuthors";
import { IBook } from "../../domains/IBook";

export const defaultAuthors: IAuthors[] = [
  {
    id: "1",
    name: "Robert C. Martin",
    email: "robertcmartin@email.com",
    description:
      "Robert Cecil Martin is an American software engineer and author. He is a co-author of the Agile Manifesto. He now runs a consulting firm called Uncle Bob Consulting LLC and Clean Coders which hosts videos based on software engineering.",
  },
  {
    id: "2",
    name: "Martin Fowler",
    email: "martinfowler@email.com",
    description:
      "Martin Fowler is a British software developer, author and international speaker on software development, specializing in object-oriented analysis and design, UML, patterns, and agile software development methodologies.",
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
