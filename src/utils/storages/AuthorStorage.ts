import { IAuthors } from "../../domains/IAuthors";

export class AuthorStorage {
  private authorStorage: string | null;

  constructor() {
    this.authorStorage = localStorage.getItem("authors");
  }

  getAuthors(): IAuthors[] | null {
    if (!this.authorStorage) return null;

    return JSON.parse(this.authorStorage);
  }

  updateAuthor(authors: IAuthors[]): void {
    localStorage.setItem("authors", JSON.stringify(authors));
  }
}
