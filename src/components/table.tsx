import { useState } from "react";

import { IBook } from "../domains/IBook";

import { useAuthor } from "../contexts/AuthorContext";

import Checkbox from "./checkbox";

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
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th colSpan={3}>Name</th>
          </tr>
        </thead>

        <tbody>
          {data.map(({ id, name }: IBook) => (
            <tr key={id}>
              <td>
                <Checkbox onCheckedChange={() => setSelected(id)} />
              </td>
              <td>{name}</td>
              <td>
                <button className="viewButton" onClick={() => openBook(id)}>
                  <img src="./eye.svg" alt="Eye image button" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
