import * as Dialog from "@radix-ui/react-dialog";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

import { useAuthor } from "../../contexts/AuthorContext";
import { createAuthorSchema } from "../../utils/validators/createAuthorValidator";

type Inputs = {
  name: string;
  email: string;
};

export default function CreateAuthorModal() {
  const [modal, setModal] = useState<boolean>(false);
  const { getAuthors, addAuthor } = useAuthor();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(createAuthorSchema) });

  const onSubmit: SubmitHandler<Inputs> = ({ name, email }) => {
    const existAuthor = getAuthors().find(
      (currentAuthors) => currentAuthors.name === name
    );

    if (existAuthor) {
      setError("name", {
        message: "Author already exist",
      });

      return;
    }

    addAuthor({
      id: uuid(),
      name,
      email,
    });

    setModal(!modal);
  };

  return (
    <Dialog.Root onOpenChange={setModal} open={modal}>
      <Dialog.Trigger className="Button Button--medium">
        Criar Autor
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="ModalOverlay" />
        <Dialog.Content className="ModalContent">
          <Dialog.Title className="Text--bold">Criar Autor</Dialog.Title>
          <Dialog.Description className="Text--small Text--secondary">
            Adicione um novo autor na tabela
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
              />

              <ErrorMessage
                errors={errors}
                name="name"
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
              />

              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => <p>{message}</p>}
              />
            </fieldset>

            <button type="submit" className="Button Button--medium">
              Criar
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
