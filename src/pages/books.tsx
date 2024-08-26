import Table from "../components/table";
import CreateBookModal from "../components/books/createBookModal";
import { useBook } from "../contexts/BookContext";

export default function Books() {
  const { books } = useBook();

  return (
    <main>
      <div className="tablesContainer">
        <CreateBookModal />
        <div className="tables">
          <Table type="Books" data={books} headers={["Book Name"]} />
        </div>
      </div>
    </main>
  );
}
