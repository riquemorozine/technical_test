import { useState } from "react";
import { v4 as uuid } from "uuid";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

import * as Dialog from "@radix-ui/react-dialog";

import { useAuthor } from "../../contexts/AuthorContext";
import { useBook } from "../../contexts/BookContext";

import { createBookSchema } from "../../utils/validators/createBookValidator";

import Select from "../select";

type Inputs = {
  name: string;
  author: string;
  pages: number;
};

export default function CreateBookModal() {
  const { getAuthors } = useAuthor();
  const { addBook, getBooks } = useBook();
  const [modal, setModal] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(createBookSchema) });

  const onSubmit: SubmitHandler<Inputs> = ({ author, name, pages }) => {
    const existAuthor = getAuthors().find(
      (currentAuthors) => currentAuthors.id === author
    );

    if (!existAuthor) {
      setError("author", {
        message: "Author doesn't exist",
      });
    }

    const bookExist = getBooks().find(
      (book) => book.name === name && book.author_id === author
    );

    if (bookExist) {
      setError("name", {
        message: "Book already exist",
      });
    }

    addBook({
      id: uuid(),
      author_id: author,
      name,
      pages,
    });

    setModal(!modal);
  };

  return (
    <Dialog.Root onOpenChange={setModal} open={modal}>
      <Dialog.Trigger className="Button Button--medium" style={{ gridArea: 1 }}>
        Criar Livro
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="ModalOverlay" />
        <Dialog.Content className="ModalContent">
          <Dialog.Title className="Text--bold">Criação de Livro</Dialog.Title>
          <Dialog.Description className="Text--small Text--secondary">
            Adicione livros na tabela
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
              <label htmlFor="author" className="Text--small">
                Autor*
              </label>

              <Select
                data={getAuthors()}
                onValueChange={(value) => setValue("author", value)}
              />

              <input
                type="hidden"
                {...register("author", { required: "Author is required" })}
              />

              <ErrorMessage
                errors={errors}
                name="author"
                render={({ message }) => <p>{message}</p>}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="pages" className="Text--small">
                Quantidade de Paginas
              </label>

              <input
                {...register("pages")}
                id="pages"
                type="text"
                placeholder="139"
                className="ModalInput"
              />

              <ErrorMessage
                errors={errors}
                name="pages"
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
