import { resendClient } from "../lib/resend";
import { createWelcomeEmailTemplate } from "./emailTemplates";

export const sendWelcomeEmail = async (name, email, clientURL) => {
  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    // TO_DO: come up with a good name for this app
    subject: "Welcome to -------",
    html: createWelcomeEmailTemplate(name, clientURL),
  });

  if (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email!");
  }
  console.log("Welcome email sent successfully.", data);
};
