import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as Dialog from "@radix-ui/react-dialog";

import { useAuthor } from "../contexts/AuthorContext";
import { useBook } from "../contexts/BookContext";

import Select from "./select";
import { ErrorMessage } from "@hookform/error-message";
import { createBookSchema } from "../utils/validators/createBookValidator";

type Inputs = {
  name: string;
  author: string;
  pages: number;
};

export default function CreateBookModal() {
  const { getAuthors } = useAuthor();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(createBookSchema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="ModalOverlay" />
      <Dialog.Content className="ModalContent">
        <Dialog.Title className="ModalTitle">Create Book</Dialog.Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label htmlFor="bookName" className="ModalLabel">
              Name*
            </label>

            <input
              {...register("name", { required: "this input is required" })}
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
            <label htmlFor="author" className="ModalLabel">
              Author*
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
            <label htmlFor="pages" className="ModalLabel">
              Pages
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

          <button type="submit">Submit</button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
