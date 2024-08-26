import { useAuthor } from "../contexts/AuthorContext";

import Table from "../components/table";
import PageDescription from "../components/pageDescription";

export default function Authors() {
  const { authors } = useAuthor();

  return (
    <main>
      <PageDescription
        title="Autores"
        description="Visualize a lista de autores, crie ou modifique os autores"
      />

      <div className="tables">
        <Table type="Authors" data={authors} headers={["Author"]} />
      </div>
    </main>
  );
}
