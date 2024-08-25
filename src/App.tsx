import Table from "./components/table";
import CreateBookModal from "./components/createBookModal";

import { useBook } from "./contexts/BookContext";

function App() {
  const { books } = useBook();

  return (
    <main>
      <div className="createButtons">
        <CreateBookModal />
      </div>

      <div className="tables">
        <Table data={books} headers={["Book Name", "Author"]} />
      </div>
    </main>
  );
}

export default App;
