import { useState } from "react";

import { IBook } from "../domains/IBook";

import Checkbox from "./checkbox";
import BookModal from "./bookModal";

interface ITableProps {
  headers: string[];
  data: IBook[];
}

export default function Table({ data }: ITableProps) {
  const [selectedBooks, setSelectedBooks] = useState<string[]>([]);

  const setSelected = (id: string) => {
    const findSomeSelected = selectedBooks.some(
      (bookId: string) => bookId === id
    );

    if (findSomeSelected) {
      setSelectedBooks(selectedBooks.filter((bookId: string) => bookId != id));
    }

    setSelectedBooks([...selectedBooks, id]);
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
                <BookModal id={id} key={id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
