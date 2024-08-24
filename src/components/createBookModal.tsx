import * as Dialog from "@radix-ui/react-dialog";
import Select from "./select";
import { useAuthor } from "../contexts/AuthorContext";

export default function CreateBookModal() {
  const { getAuthors } = useAuthor();

  const handleSelect = (id: string) => {
    console.log(id);
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="ModalOverlay" />
      <Dialog.Content className="ModalContent">
        <Dialog.Title className="ModalTitle">Create Book</Dialog.Title>

        <fieldset>
          <label htmlFor="bookName" className="ModalLabel">
            Name*
          </label>
          <input
            type="text"
            placeholder="Harry Potter"
            id="bookName"
            className="ModalInput"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="author" className="ModalLabel">
            Author*
          </label>
          <Select data={getAuthors()} onValueChange={handleSelect} />
        </fieldset>

        <fieldset>
          <label htmlFor="pages" className="ModalLabel">
            Pages
          </label>
          <input
            type="text"
            id="pages"
            placeholder="139"
            className="ModalInput"
          />
        </fieldset>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
