import { ContactRequest } from "@/src/app/contact/page"
import { send, EmailJSResponseStatus } from "@emailjs/browser"

export const sendEmail = (
  params: ContactRequest,
): Promise<EmailJSResponseStatus> =>
  send("service_zbbzytx", "template_4a6h7sv", params, "QTK5rLeuJi7cCZkWX")
