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
import { ImageUpload } from "../../utils/images/imageUpload";

type Inputs = {
  name: string;
  author: string;
  description: string;
  pages: number;
  image: any;
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

  const onSubmit: SubmitHandler<Inputs> = async ({
    author,
    name,
    pages,
    description,
    image,
  }) => {
    const existAuthor = getAuthors().find(
      (currentAuthors) => currentAuthors.id === author
    );
    let imageUrl;

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

    if (image.length > 0) {
      imageUrl = await ImageUpload(image[0]);
    }

    addBook({
      id: uuid(),
      description,
      image: imageUrl ? imageUrl : "",
      author_id: author,
      name,
      pages,
    });

    setModal(!modal);
  };

  return (
    <Dialog.Root onOpenChange={setModal} open={modal}>
      <Dialog.Trigger className="Button Button--medium">
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
              <label htmlFor="bookDescription" className="Text--small">
                Descrição
              </label>

              <textarea
                {...register("description")}
                id="bookDescription"
                className="ModalInput"
                placeholder="Um livro sobre magia"
              />

              <ErrorMessage
                errors={errors}
                name="description"
                render={({ message }) => <p>{message}</p>}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="bookImage" className="Text--small">
                Imagem
              </label>

              <input {...register("image")} type="file" accept=".jpg, .png" />

              <ErrorMessage
                errors={errors}
                name="bookImage"
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
