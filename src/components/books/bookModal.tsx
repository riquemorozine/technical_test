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
  const [currentBook, setBook] = useState<IBook>();
  const { getBookById, books } = useBook();
  const { getAuthorById } = useAuthor();

  useEffect(() => {
    const findBook = getBookById(id);

    if (!findBook) {
      setModal(false);
      return;
    }

    setBook(findBook);
  }, [books]);

  return (
    <Dialog.Root onOpenChange={setModal} open={modal}>
      <Dialog.Trigger className="Button Button--small">
        <img src="./eye.svg" alt="Eye image button" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="ModalOverlay" />
        <Dialog.Content className="ModalContent">
          <Dialog.Title className="Text--bold">
            {currentBook?.name}
          </Dialog.Title>
          <Dialog.Description className="modalDescription Text--medium ">
            {currentBook?.description}
          </Dialog.Description>
          <div className="modalBody">
            {currentBook?.image ? (
              <img src={currentBook?.image} alt="" />
            ) : (
              <></>
            )}
          </div>

          <div className="ModalDetails">
            <p className="Text--medium">Autor</p>
            <p className="Text--small Text--secondary">
              {currentBook?.author_id &&
                getAuthorById(currentBook.author_id)?.name}
            </p>
          </div>

          <div className="ModalDetails">
            <p className="Text--medium">Total de Paginas</p>
            <p className="Text--small Text--secondary">{currentBook?.pages}</p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
