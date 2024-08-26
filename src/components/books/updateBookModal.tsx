import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

import * as Dialog from "@radix-ui/react-dialog";
import { Pencil1Icon } from "@radix-ui/react-icons";

import { IBook } from "../../domains/IBook";
import { useAuthor } from "../../contexts/AuthorContext";
import { useBook } from "../../contexts/BookContext";

import { createBookSchema } from "../../utils/validators/createBookValidator";

import Select from "../select";

interface IUpdateBookModalProps {
  id: string;
}

type Inputs = {
  name: string;
  author: string;
  description: string;
  pages: number;
};

export default function UpdateBookModal({ id }: IUpdateBookModalProps) {
  const [modal, setModal] = useState(false);
  const [book, setBook] = useState<IBook>();

  const { getAuthors } = useAuthor();
  const { getBooks, updateBook } = useBook();

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(createBookSchema) });

  useEffect(() => {
    const findBook = getBooks().find((book) => book.id === id);

    if (!findBook) {
      setModal(false);
      return;
    }

    setBook(findBook);
  }, []);

  const onSubmit = ({ author, description, name, pages }: Inputs) => {
    const existAuthor = getBooks().find(
      (currentBooks) => currentBooks.name === name
    );

    if (existAuthor?.id !== id) {
      setError("name", {
        message: "Book already exist",
      });

      return;
    }

    updateBook({ id, author_id: author, description, name, pages });
    setModal(false);
  };

  return (
    <Dialog.Root onOpenChange={setModal} open={modal}>
      <Dialog.Trigger className="Button--yellow Button--small">
        <Pencil1Icon />
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
                defaultValue={book?.name}
              />

              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => <p>{message}</p>}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="bookDescription" className="Text--small">
                Descrição
              </label>

              <textarea
                {...register("description")}
                id="bookDescription"
                className="ModalInput"
                placeholder="Um livro sobre magia"
                defaultValue={book?.description}
              />

              <ErrorMessage
                errors={errors}
                name="description"
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

              <input type="hidden" {...register("author")} />

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
                defaultValue={book?.pages}
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
