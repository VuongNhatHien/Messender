"use server";

import { RegisterSchema, FormState } from "@/lib/definitions";
import { redirect } from "next/navigation";

export async function signup(state: FormState, formData: FormData) {
    // Validate form fields
    const payload = {
        name: formData.get("name"),
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

    // Call the provider or db to create a user...
}

export async function login(state: FormState, formData: FormData) {
    // Validate form fields
    const payload = {
        name: formData.get("name"),
        password: formData.get("password"),
        remember: formData.get("remember"),
    };
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
    state: FormState,
    formData: FormData,
) {
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
    // Call the provider or db to create a user...
}

export async function logout() {
    redirect("/auth/login");
}
