"use server";

import {
    LoginState,
    MessageState,
    RegisterSchema,
    RegisterState,
} from "@/lib/definitions";
import { redirect } from "next/navigation";

export async function signup(state: RegisterState, formData: FormData) {
    console.log(state);
    // Validate form fields
    const payload = {
        name: formData.get("name"),
        displayName: formData.get("displayName"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    };
    const validatedFields = RegisterSchema.safeParse(payload);

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            payload: payload,
        };
    }

    console.log("User created successfully!");
    console.log(formData);

    // Call the provider or db to create a user...
}

export async function login(state: LoginState, formData: FormData) {
    console.log(state);
    console.log(formData);
    // Validate form fields
    // const payload = {
    //     name: formData.get("name"),
    //     password: formData.get("password"),
    //     remember: formData.get("remember"),
    // };
    // const validatedFields = RegisterSchema.safeParse(payload);

    // // If any form fields are invalid, return early
    // if (!validatedFields.success) {
    //     return {
    //         errors: validatedFields.error.flatten().fieldErrors,
    //         payload: payload,
    //     };
    // }

    console.log("User logged in successfully!");

    // Call the provider or db to create a user...
    return undefined;
}

export async function sendMessage(
    chatId: string,
    state: MessageState,
    formData: FormData,
) {
    console.log(state);
    const payload = {
        message: formData.get("message"),
    };

    if (!payload.message) {
        return undefined;
    }

    console.log(`Message with chatId ${chatId} sent: ${payload.message}`);
    return undefined;
}

export async function uploadFiles(chatId: string, files: FileList) {
    // console.log(`Files uploaded with chatId ${chatId} : `, files);
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
    }
    //print form data
    console.log(`From chatId ${chatId}`, formData);
}

export async function addUser(userId: number) {
    console.log(`User with userId ${userId} added to chat`);
    // Call the provider or db to create a user...
}

export async function logout() {
    redirect("/auth/login");
}
