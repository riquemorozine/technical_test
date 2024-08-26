import { IAuthors } from "../../domains/IAuthors";
import { AuthorStorage } from "../storages/AuthorStorage";
import { defaultAuthors } from "./defaultTable";

export class Author {
  private authorStorage: AuthorStorage;

  constructor() {
    this.authorStorage = new AuthorStorage();
  }

  fetch(): IAuthors[] {
    const authors = this.authorStorage.getAuthors();

    if (!authors) {
      this.authorStorage.updateAuthor(defaultAuthors);
      return defaultAuthors;
    }

    return authors;
  }

  delete(id: string): IAuthors[] | void {
    const authors = this.authorStorage.getAuthors();
    if (!authors) return;

    const authorExist = authors.some((author: IAuthors) => author.id === id);
    if (!authorExist) return;

    const deletedAuthor = authors.filter((author: IAuthors) => author.id != id);

    this.authorStorage.updateAuthor(deletedAuthor);
    return deletedAuthor;
  }

  add(data: IAuthors): IAuthors[] | void {
    const authors = this.authorStorage.getAuthors();
    if (!authors) return;

    const isDuplicate = authors.some(
      (author: IAuthors) => author.id === data.id
    );
    if (isDuplicate) return;

    const createAuthor = [...authors, data];
    this.authorStorage.updateAuthor(createAuthor);

    return createAuthor;
  }
}
