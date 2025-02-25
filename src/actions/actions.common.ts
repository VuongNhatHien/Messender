"use server";

import { requests } from "@/request/requests";
import {
    LoginResponseValidationErrorType,
    RegisterResponseValidationErrorType,
} from "@/types/response.type";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { mutate } from "swr";

export async function register(prevState: unknown, formData: FormData) {
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
        redirect(redirectPath);
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
    };
}

export async function login(prevState: unknown, formData: FormData) {
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
    const result = await requests.login(body);

    if (result.code === "SUCCESS") {
        return {
            payload,
            token: result.data.token,
            expiresIn: result.data.expiresIn,
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
    };
}

export async function sendMessage(
    chatId: string,
    prevState: any,
    formData: FormData,
) {
    console.log(prevState);
    const message = formData.get("message") as string;
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const res = await requests.sendMessage(chatId, message, token!);
    return res.data;
}
