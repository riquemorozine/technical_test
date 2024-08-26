import { useAuthor } from "../contexts/AuthorContext";

import Table from "../components/table";
import PageDescription from "../components/pageDescription";

export default function Authors() {
  const { authors } = useAuthor();

  return (
    <main>
      <PageDescription
        title="Livros"
        description="Visualize a lista de livros, crie ou modifique os livros"
      />

      <div className="tables">
        <Table type="Authors" data={authors} headers={["Author"]} />
      </div>
    </main>
  );
}
