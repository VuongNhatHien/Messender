"use server";

import envConfig from "@/config";
import { request } from "@/request/request";
import { RegisterResponseValidationErrorType } from "@/types/response.type";
import { redirect } from "next/navigation";

export async function signup(prevState: any, formData: FormData) {
    console.log(prevState);
    const username = formData.get("username") as string;
    const displayName = formData.get("displayName") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const body = {
        username,
        displayName,
        password,
    };
    const payload = {
        ...body,
        confirmPassword,
    };

    const result = await request.register(body);

    console.log("Register result: ", result);

    if (password !== confirmPassword) {
        return {
            payload,
            errors: {
                confirmPassword: "Passwords do not match",
            },
        };
    }

    if (result.code === "SUCCESS") {
        redirect("/auth/login");
    }
    if (result.code === "VALIDATION_ERROR") {
        const { username, displayName, password } =
            result.data as RegisterResponseValidationErrorType;
        return {
            payload,
            errors: {
                username,
                displayName,
                password,
            },
        };
    }
    if (result.code === "USER_EXISTED") {
        return {
            payload,
            errors: {
                username: "Username already exists",
            },
        };
    }
    return {
        payload,
        message: "An unknown error has occurred",
    };
}

export async function login(prevState: any, formData: FormData) {
    console.log(prevState);
    const username = formData.get("username");
    const password = formData.get("password");
    const remember = formData.get("remember");
    const payload = {
        username,
        password,
        remember,
    };
    const body = {
        username,
        password,
    };

    const response = await fetch(
        `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/login`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        },
    );

    const result = await response.json();
    console.log("Login result: ", result);

    if (result.code === "SUCCESS") {
        redirect("/");
    }
    if (result.code === "VALIDATION_ERROR") {
        return {
            payload,
            errors: {
                username: result.data.username,
                password: result.data.password,
            },
        };
    }
    if (result.code === "WRONG_PASSWORD") {
        return {
            payload,
            errors: {
                password: "Incorrect password",
            },
        };
    }
    if (result.code === "USER_NOT_FOUND") {
        return {
            payload,
            errors: {
                username: "User not found",
            },
        };
    }
    return {
        payload,
        message: "An unknown error has occurred",
    };
}

export async function sendMessage(
    chatId: string,
    prevState: any,
    formData: FormData,
) {
    console.log(prevState);
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
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
    }
    //print form data
    console.log(`From chatId ${chatId}`, formData);
}

export async function addUser(userId: number) {
    console.log(`User with userId ${userId} added to chat`);
}

export async function logout() {
    redirect("/auth/login");
}
