import Table from "../components/table";
import { useBook } from "../contexts/BookContext";
import PageDescription from "../components/pageDescription";

export default function Books() {
  const { books } = useBook();

  return (
    <main>
      <PageDescription
        title="Livros"
        description="Visualize a lista de livros, crie ou modifique os livros"
      />

      <div className="tablesContainer">
        <div className="tables">
          <Table type="Books" data={books} headers={["Book Name"]} />
        </div>
      </div>
    </main>
  );
}
