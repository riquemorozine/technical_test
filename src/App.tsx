import { useBook } from "./contexts/BookContext";
import Table from "./components/table";
import CreateBookModal from "./components/createBookModal";
import ModalButton from "./components/modalButton";

function App() {
  const { books } = useBook();

  return (
    <main>
      <ModalButton name="Create Book">
        <CreateBookModal />
      </ModalButton>

      <Table data={books} headers={["Book Name", "Author"]} />
    </main>
  );
}

export default App;
