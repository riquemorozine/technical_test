import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { useBook } from "../../contexts/BookContext";
import { IBook } from "../../domains/IBook";
import { useAuthor } from "../../contexts/AuthorContext";

interface BookModalProps {
  id: string;
}

export default function BookModal({ id }: BookModalProps) {
  const [modal, setModal] = useState<boolean>(false);
  const [book, setBook] = useState<IBook>();
  const { getBookById } = useBook();
  const { getAuthorById } = useAuthor();

  useEffect(() => {
    const findBook = getBookById(id);

    if (!findBook) {
      setModal(false);
      return;
    }

    setBook(findBook);
  }, []);

  return (
    <Dialog.Root onOpenChange={setModal} open={modal}>
      <Dialog.Trigger className="Button Button--small">
        <img src="./eye.svg" alt="Eye image button" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="ModalOverlay" />
        <Dialog.Content className="ModalContent">
          <Dialog.Title className="ModalTitle">{book?.name}</Dialog.Title>
          <div className="ModalDetails">
            <p className="ModalDetailsTitle">Autor</p>
            <p className="ModalDetailsDescription">
              {book?.author_id && getAuthorById(book.author_id)?.name}
            </p>
          </div>
          <div className="ModalDetails">
            <p className="ModalDetailsTitle">Total de Paginas</p>
            <p className="ModalDetailsDescription">{book?.pages}</p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
