import * as yup from "yup";

export const createAuthorSchema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().email().optional().default(""),
  })
  .required();
