"use server";

import { requests } from "@/request/requests";
import {
    LoginResponseValidationErrorType,
    RegisterResponseValidationErrorType,
} from "@/types/response.type";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function register(prevState: any, formData: FormData) {
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

    let redirectPath = null;
    try {
        const result = await requests.register(body);

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
            redirectPath = "/auth/login";
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
    } catch (error) {
        console.error(error);
        return {
            payload,
            message: "An unknown error has occurred",
        };
    } finally {
        if (redirectPath) {
            redirect(redirectPath);
        }
    }
}

export async function login(prevState: any, formData: FormData) {
    console.log(prevState);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const remember = formData.get("remember") as string;
    const payload = {
        username,
        password,
        remember,
    };
    const body = {
        username,
        password,
    };
    let redirectPath = null;
    try {
        const result = await requests.login(body);
        console.log("Login result: ", result);

        if (result.code === "SUCCESS") {
            return {
                payload,
                token: result.data.token,
                expiresIn: result.data.expiresIn,
                redirectPath: "/",
                code: "SUCCESS",
            };
        }
        if (result.code === "VALIDATION_ERROR") {
            const { username, password } =
                result.data as LoginResponseValidationErrorType;
            return {
                payload,
                errors: {
                    username,
                    password,
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
    } catch (error) {
        console.error(error);
        return {
            payload,
            message: "An unknown error has occurred",
            code: "INTERNAL_SERVER_ERROR",
        };
    }
}

export async function sendMessage(
    chatId: string,
    prevState: any,
    formData: FormData,
) {
    console.log(prevState);
    const body = {
        message: formData.get("message") as string,
    };

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const res = await requests.sendMessage(chatId, body, token!);
    console.log("Send message result: ", res.data);
    revalidatePath(`/chats`);
}

export async function uploadFiles(chatId: string, files: FileList) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
    }
    //print form data
    console.log(`From chatId ${chatId}`, formData);
}

export async function addUser(userId: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const res = await requests.addUser(userId, token!);
    console.log("Chat id", res.data.id);
    // revalidatePath(`/chats`);
    redirect(`/chats/${res.data.id}`);
}

export async function logout() {
    redirect("/auth/login");
}
