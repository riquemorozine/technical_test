import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Pencil1Icon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";

import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";

import { createAuthorSchema } from "../../utils/validators/createAuthorValidator";
import { useAuthor } from "../../contexts/AuthorContext";
import { IAuthors } from "../../domains/IAuthors";

type Inputs = {
  name: string;
  description: string;
  email: string;
};

interface IUpdateAuthorModalProps {
  id: string;
}

export function UpdateAuthorModal({ id }: IUpdateAuthorModalProps) {
  const [modal, setModal] = useState<boolean>(false);
  const [currentAuthor, setAuthor] = useState<IAuthors>();
  const { getAuthors, updateAuthor, authors } = useAuthor();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(createAuthorSchema) });

  const onSubmit: SubmitHandler<Inputs> = ({ name, email, description }) => {
    const existAuthor = getAuthors().find((author) => author.name === name);

    if (existAuthor && existAuthor.id !== id) {
      setError("name", {
        message: "Book already exist",
      });

      return;
    }

    updateAuthor({ id, name, email, description });
    setModal(false);
  };

  useEffect(() => {
    const findAuthor = getAuthors().find((author) => author.id === id);

    if (!findAuthor) {
      setModal(false);
      return;
    }

    setAuthor(findAuthor);
  }, [authors]);

  return (
    <Dialog.Root onOpenChange={setModal} open={modal}>
      <Dialog.Trigger className="Button--yellow Button--small">
        <Pencil1Icon />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="ModalOverlay" />
        <Dialog.Content className="ModalContent">
          <Dialog.Title className="Text--bold">Atualizar Autor</Dialog.Title>
          <Dialog.Description className="Text--small Text--secondary">
            Atualize um autor na tabela
          </Dialog.Description>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <label htmlFor="bookName" className="Text--small">
                Nome*
              </label>

              <input
                {...register("name")}
                id="bookName"
                type="text"
                className="ModalInput"
                placeholder="Harry Potter"
                defaultValue={currentAuthor?.name}
              />

              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => <p>{message}</p>}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="authorDescription" className="Text--small">
                Descrição
              </label>

              <textarea
                {...register("description")}
                id="authorDescription"
                className="ModalInput"
                placeholder="Descrição do autor"
                defaultValue={currentAuthor?.description}
              />

              <ErrorMessage
                errors={errors}
                name="description"
                render={({ message }) => <p>{message}</p>}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="email" className="Text--small">
                Email
              </label>

              <input
                {...register("email")}
                id="email"
                type="text"
                placeholder="example@email.com"
                className="ModalInput"
                defaultValue={currentAuthor?.email}
              />

              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => <p>{message}</p>}
              />
            </fieldset>

            <button type="submit" className="Button Button--medium">
              Atualizar
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
