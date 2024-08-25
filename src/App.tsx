import Table from "./components/table";
import CreateBookModal from "./components/createBookModal";

import { useBook } from "./contexts/BookContext";
import { useAuthor } from "./contexts/AuthorContext";

function App() {
  const { books } = useBook();
  const { authors } = useAuthor();

  return (
    <main>
      <div className="createButtons">
        <CreateBookModal />
      </div>

      <div className="tablesContainer">
        <div className="tables">
          <Table type="Books" data={books} headers={["Book Name"]} />
        </div>

        <div className="tables">
          <Table type="Authors" data={authors} headers={["Author"]} />
        </div>
      </div>
    </main>
  );
}

export default App;
