import * as yup from "yup";

export const createBookSchema = yup
  .object({
    name: yup.string().required("Name is required"),
    author: yup.string().required("Author is required"),
    pages: yup
      .number()
      .optional()
      .transform((value) => (isNaN(value) ? 1 : value))
      .typeError("Pages must be a number")
      .positive("Pages must be a positive number")
      .integer("Pages must be an integer")
      .default(0),
  })
  .required();
