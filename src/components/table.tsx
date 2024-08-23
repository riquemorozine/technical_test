import "../sass/components/table/_table.scss";

interface IBook {
  id: string;
  name: string;
  authorId: string;
  pages: number;
}

interface ITableProps {
  headers: string[];
  data: IBook[];
}

export default function Table({ data }: ITableProps) {
  return (
    <>
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
          {data.map(({ id, name, authorId, pages }: IBook) => (
            <tr key={id}>
              <input type="checkbox" />
              <td>{name}</td>
              <td>{authorId}</td>
              <td>{pages}</td>
              <button>Open</button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
