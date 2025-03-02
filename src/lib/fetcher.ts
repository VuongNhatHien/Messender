"use client";

import envConfig from "@/config";

export const fetcher = async (url: string) => {
    const baseUrl = envConfig.NEXT_PUBLIC_API_ENDPOINT;
    const fullUrl = url.startsWith("/")
        ? `${baseUrl}${url}`
        : `${baseUrl}/${url}`;
    //wait 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000000));
    const res = await fetch(fullUrl, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    return await res.json();
};
