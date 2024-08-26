import { useAuthor } from "../contexts/AuthorContext";

import CreateAuthorModal from "../components/authors/createAuthorModal";
import Table from "../components/table";

export default function Authors() {
  const { authors } = useAuthor();

  return (
    <>
      <CreateAuthorModal />
      <div className="tables">
        <Table type="Authors" data={authors} headers={["Author"]} />
      </div>
    </>
  );
}
