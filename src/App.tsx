import { useEffect } from "react";
import Table from "./components/table";
import { useBook } from "./contexts/BookContext";
import "./sass/pages/_app.scss";

function App() {
  const { books, setBook } = useBook();

  useEffect(() => {
    setBook([{ author_id: "123", id: "123", name: "um livro ai", pages: 12 }]);
  }, []);

  return (
    <>
      <Table data={books} headers={["Book Name", "Author"]} />
    </>
  );
}

export default App;
