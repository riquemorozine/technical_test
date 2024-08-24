import { IAuthors } from "../domains/IAuthors";

export class Author {
  fetch(): IAuthors[] {
    const authors = localStorage.getItem("authors");

    if (!authors) {
      const exampleAuthor = {
        id: "1",
        name: "Example Author",
        email: "example@email.com",
      };

      localStorage.setItem("authors", JSON.stringify([exampleAuthor]));
      return [exampleAuthor];
    }

    return JSON.parse(authors);
  }

  delete(id: string): IAuthors[] | void {
    const authors = localStorage.getItem("authors");

    if (!authors) return;
    const parsedAuthors = JSON.parse(authors);

    const authorExist = parsedAuthors.some(
      (author: IAuthors) => author.id === id
    );
    if (!authorExist) return;

    const deletedAuthor = parsedAuthors.filter(
      (author: IAuthors) => author.id != id
    );

    localStorage.setItem("authors", JSON.stringify(deletedAuthor));
    return deletedAuthor;
  }

  add(data: IAuthors): IAuthors[] | void {
    const authors = localStorage.getItem("authors");

    if (!authors) return;
    const parsedAuthors = JSON.parse(authors);

    const isDuplicate = parsedAuthors.some(
      (author: IAuthors) => author.id === data.id
    );
    if (isDuplicate) return;

    const createAuthor = [...parsedAuthors, data];
    localStorage.setItem("authors", JSON.stringify(createAuthor));

    return createAuthor;
  }
}
