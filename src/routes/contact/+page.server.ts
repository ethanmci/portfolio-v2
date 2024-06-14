// TODO: implemement proper actions for form submission
import type { Actions } from "./$types";
import * as EmailValidator from 'email-validator';
import { SECRET_API_KEY } from '$env/static/private';
import { error } from "@sveltejs/kit";

export const actions = {
    submit: async ({ request }) => {
        const data = await request.formData()
        const name = data.get('name');
        const email = data.get('email');
        // const title = data.get('title');
        const message = data.get('message'); 
        
        if(name!.toString().length > 0 
            && EmailValidator.validate(email!.toString())
            && message!.toString().length > 0
        ) {
            // sending the message now
            data.append('site', 'ethanmc.xyz');
            data.append('access_key', SECRET_API_KEY);
            const object = Object.fromEntries(data);
            const json = JSON.stringify(object);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json
            });
            const result = await response.json();
            if (result.success) {
                return { success: true } 
            } else {
                return error(400, "Bad Request");
            }
        } else {
            const errors: string[] = [];
            if (name!.toString().length > 0) errors.push("Name");
            if (message!.toString().length > 0) errors.push("Message");
            if (EmailValidator.validate(email!.toString())) errors.push("Email");

            const returnMessage: string = errors.join(", ");
            return { success: false, returnMessage: returnMessage }
        }
    }
} satisfies Actions