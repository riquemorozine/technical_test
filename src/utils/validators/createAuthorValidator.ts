import * as yup from "yup";

export const createAuthorSchema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    description: yup
      .string()
      .optional()
      .max(200, "Maximo de 200 caracteres")
      .default(""),
    email: yup.string().email().optional().default(""),
  })
  .required();
