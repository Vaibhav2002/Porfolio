import * as yup from "yup";
import { InferType } from "yup";

export const mailSchema = yup.object({
  name: yup.string().matches(/^[a-zA-Z ]+$/, "Name should only contain alphabets").required(),
  email: yup.string().email().required(),
  subject: yup.string().max(200, 'Subject cannot be more than 200 characters').required(),
  message: yup.string().max(1000, 'Message cannot be more than 1000 characters').required(),
})

export type MailSchema = InferType<typeof mailSchema>