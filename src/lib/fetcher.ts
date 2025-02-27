"use client";

import envConfig from "@/config";

export const fetcher = async (url: string) => {
    const baseUrl = envConfig.NEXT_PUBLIC_API_ENDPOINT;
    const fullUrl = url.startsWith("/")
        ? `${baseUrl}${url}`
        : `${baseUrl}/${url}`;
    // return fetch(fullUrl, {
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    // })
    //     .then((res) => res.json())
    //     .then((result) => {
    //         console.log("result", result);
    //         if (result.code !== "SUCCESS") {
    //             throw new Error(result.code);
    //         }
    //         return result.data;
    //     });
    const res = await fetch(fullUrl, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    return await res.json();
};
