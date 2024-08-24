import * as Dialog from "@radix-ui/react-dialog";
import { useEffect } from "react";

import { useBook } from "./contexts/BookContext";
import Table from "./components/table";
import CreateBookModal from "./components/createBookModal";
import ModalButton from "./components/modalButton";

function App() {
  const { books, setBook, addBook } = useBook();

  useEffect(() => {
    setBook([{ author_id: "123", id: "123", name: "um livro ai", pages: 12 }]);

    addBook({
      author_id: "133",
      id: "133",
      name: "novo livro a5 ",
      pages: 12,
    });
  }, []);

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
