import { useState } from "react";
import { IBook } from "../domains/IBook";
import "../sass/components/table/_table.scss";
import { useAuthor } from "../contexts/AuthorContext";

interface ITableProps {
  headers: string[];
  data: IBook[];
}

export default function Table({ data }: ITableProps) {
  const [selectedBooks, setSelectedBooks] = useState<string[]>([]);
  const { getAuthorById } = useAuthor();

  const setSelected = (id: string) => {
    const findSomeSelected = selectedBooks.some(
      (bookId: string) => bookId === id
    );

    if (findSomeSelected) {
      setSelectedBooks(selectedBooks.filter((bookId: string) => bookId != id));
    }

    setSelectedBooks([...selectedBooks, id]);
  };

  const openBook = (id: string) => {
    console.log(id);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Author</th>
          <th>Pages</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {data.map(({ id, name, author_id, pages }: IBook) => (
          <tr key={id}>
            <td>
              <input type="checkbox" onChange={() => setSelected(id)} />
            </td>
            <td>{name}</td>
            <td>{getAuthorById(author_id)?.name || "Unknown Author"}</td>
            <td>{pages}</td>
            <td>
              <button className="viewButton" onClick={() => openBook(id)}>
                <img src="./eye.svg" alt="Eye image button" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
