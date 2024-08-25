import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";

import { useAuthor } from "../../contexts/AuthorContext";
import { IAuthors } from "../../domains/IAuthors";

interface IAuthorModalProps {
  id: string;
}

export default function AuthorModal({ id }: IAuthorModalProps) {
  const [modal, setModal] = useState<boolean>(false);
  const [author, setAuthor] = useState<IAuthors>();
  const { getAuthorById } = useAuthor();

  useEffect(() => {
    const findAuthor = getAuthorById(id);

    if (!findAuthor) {
      setModal(false);
      return;
    }

    setAuthor(findAuthor);
  }, []);

  return (
    <>
      <Dialog.Root onOpenChange={setModal} open={modal}>
        <Dialog.Trigger className="Button Button--small">
          <img src="./eye.svg" alt="Eye image button" />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="ModalOverlay" />
          <Dialog.Content className="ModalContent">
            <Dialog.Title className="ModalTitle">{author?.name}</Dialog.Title>
            <div className="ModalDetails">
              <p className="ModalDetailsTitle">Email</p>
              <p className="ModalDetailsDescription">
                {author?.email === "" ? "Email not found" : author?.email}
              </p>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
