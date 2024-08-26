import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { useAuthor } from "../../contexts/AuthorContext";
import { IAuthors } from "../../domains/IAuthors";

interface IAuthorModalProps {
  id: string;
}

export default function AuthorModal({ id }: IAuthorModalProps) {
  const [modal, setModal] = useState<boolean>(false);
  const [currentAuthor, setAuthor] = useState<IAuthors>();
  const { getAuthorById, authors } = useAuthor();

  useEffect(() => {
    const findAuthor = getAuthorById(id);

    if (!findAuthor) {
      setModal(false);
      return;
    }

    setAuthor(findAuthor);
  }, [authors]);

  return (
    <>
      <Dialog.Root onOpenChange={setModal} open={modal}>
        <Dialog.Trigger className="Button Button--small">
          <img src="./eye.svg" alt="Eye image button" />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="ModalOverlay" />
          <Dialog.Content className="ModalContent">
            <Dialog.Title className="Text--bold">
              {currentAuthor?.name}
            </Dialog.Title>
            <Dialog.Description className="Text--medium modalDescription">
              {currentAuthor?.description}
            </Dialog.Description>
            <div className="ModalDetails">
              <p className="Text--medium">Email</p>
              <p className="Text--small Text--secondary">
                {currentAuthor?.email === ""
                  ? "Email not found"
                  : currentAuthor?.email}
              </p>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
