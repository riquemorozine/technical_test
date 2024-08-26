import BookModal from "./books/bookModal";
import AuthorModal from "./authors/authorModal";
import Alert from "./alert";
import { UpdateAuthorModal } from "./authors/updateAuthorModal";
import UpdateBookModal from "./books/updateBookModal";

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
              <td>{name}</td>
              <td>
                {type === "Books" ? (
                  <div className="tableButtons">
                    <BookModal id={id} />
                    <UpdateBookModal id={id} />
                    <Alert type="Books" id={id} />
                  </div>
                ) : (
                  <div className="tableButtons">
                    <AuthorModal id={id} />
                    <UpdateAuthorModal id={id} />
                    <Alert type="Authors" id={id} />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
