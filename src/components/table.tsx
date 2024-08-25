import { useState } from "react";

import Checkbox from "./checkbox";
import BookModal from "./books/bookModal";
import AuthorModal from "./authors/authorModal";

interface IData {
  id: string;
  name: string;
}

interface ITableProps {
  headers: string[];
  data: IData[];
  type: string;
}

export default function Table({ data, type }: ITableProps) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const setSelected = (id: string) => {
    const findSomeSelected = selectedItems.some(
      (itemId: string) => itemId === id
    );

    if (findSomeSelected) {
      setSelectedItems(selectedItems.filter((itemId: string) => itemId != id));
    }

    setSelectedItems([...selectedItems, id]);
  };

  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th colSpan={3}>{type}</th>
          </tr>
        </thead>

        <tbody>
          {data.map(({ id, name }: IData) => (
            <tr key={id}>
              <td>
                <Checkbox onCheckedChange={() => setSelected(id)} />
              </td>
              <td>{name}</td>
              <td>
                {type === "Books" ? (
                  <BookModal id={id} key={id} />
                ) : (
                  <AuthorModal id={id} key={id} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
