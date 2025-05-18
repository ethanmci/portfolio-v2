// TODO: implement proper actions for form submission
import type { Actions } from "./$types";
import * as EmailValidator from "email-validator";
import { SECRET_API_KEY, SECRET_TURN_KEY } from "$env/static/private";
import { error } from "@sveltejs/kit";

interface TokenValidateResponse {
  "error-codes": string[];
  success: boolean;
  action: string;
  cdata: string;
}

async function validateToken(token: string, secret: string) {
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        response: token,
        secret: secret,
      }),
    },
  );

  const data: TokenValidateResponse = await response.json();

  return {
    // Return the status
    tokenSuccess: data.success,

    // Return the first error if it exists
    tokenError: data["error-codes"]?.length ? data["error-codes"][0] : null,
  };
}

export const actions = {
  submit: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    // const title = data.get('title');
    const message = data.get("message");

    const token = data.get("cf-turnstile-response")?.toString();
    const { tokenSuccess, tokenError } = await validateToken(
      token || "",
      SECRET_TURN_KEY,
    );

    if (
      name!.toString().length > 0 &&
      EmailValidator.validate(email!.toString()) &&
      message!.toString().length > 0 &&
      tokenSuccess
    ) {
      // sending the message now
      data.append("site", "ethanmc.xyz");
      data.append("access_key", SECRET_API_KEY);
      data.delete("cf-turnstile-response");
      const object = Object.fromEntries(data);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        return { success: true };
      } else {
        return error(400, "Bad Request");
      }
    } else if (tokenSuccess) {
      const errors: string[] = [];
      if (name!.toString().length > 0) errors.push("Name");
      if (message!.toString().length > 0) errors.push("Message");
      if (EmailValidator.validate(email!.toString())) errors.push("Email");

      const returnMessage: string = errors.join(", ");
      return { success: false, returnMessage: returnMessage };
    } else {
      const returnMessage: string = tokenError?.toString() || "Invalid CAPTCHA";
      return { success: false, returnMessage: returnMessage };
    }
  },
} satisfies Actions;
