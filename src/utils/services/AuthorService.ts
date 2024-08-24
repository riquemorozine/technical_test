import { IAuthors } from "../../domains/IAuthors";
import { AuthorStorage } from "../storages/AuthorStorage";

export class Author {
  private authorStorage: AuthorStorage;

  constructor() {
    this.authorStorage = new AuthorStorage();
  }

  fetch(): IAuthors[] {
    const authors = this.authorStorage.getAuthors();

    if (!authors) {
      const exampleAuthor = {
        id: "1",
        name: "Example Author",
        email: "example@email.com",
      };

      this.authorStorage.updateAuthor([exampleAuthor]);
      return [exampleAuthor];
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
