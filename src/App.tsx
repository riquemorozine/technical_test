import { useEffect } from "react";

import { useBook } from "./contexts/BookContext";
import Table from "./components/table";

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
      <Table data={books} headers={["Book Name", "Author"]} />
    </main>
  );
}

export default App;
