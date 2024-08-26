import * as yup from "yup";

export const createBookSchema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    author: yup.string().required("Autor é obrigatório"),
    image: yup.mixed().default(null),
    description: yup
      .string()
      .optional()
      .default("")
      .max(200, "Maximo de 200 caracteres"),
    pages: yup
      .number()
      .optional()
      .typeError("Numero de paginas deve ser um numero")
      .positive("Numero de paginas deve ser um numero positivo")
      .integer("Numero de paginas deve ser um numero inteiro")
      .transform((value) => (isNaN(value) ? 1 : value))
      .default(0),
  })
  .required();
