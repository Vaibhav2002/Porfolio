import { mailSchema, MailSchema } from "@/utils/MailSchema";

const sendMail = async (mail: MailSchema) => {
  const data = await mailSchema.validate(mail);
  const response = await fetch("/api/mail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const body = await response.json();
  if (!response.ok) throw Error(body.message);
};

export default sendMail;
