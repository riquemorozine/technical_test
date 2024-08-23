import { IBook } from "../domains/IBook";
import "../sass/components/table/_table.scss";

interface ITableProps {
  headers: string[];
  data: IBook[];
}

export default function Table({ data }: ITableProps) {
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
            <input type="checkbox" />
            <td>{name}</td>
            <td>{author_id}</td>
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
