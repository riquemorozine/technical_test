import * as yup from "yup";

export const createAuthorSchema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().email().optional().default(""),
  })
  .required();
