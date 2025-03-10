"use client";

export const fetcher = async (url: string) => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;
    const fullUrl = url.startsWith("/")
        ? `${baseUrl}${url}`
        : `${baseUrl}/${url}`;

    // await new Promise((resolve) => setTimeout(resolve, 2000000));

    const res = await fetch(fullUrl, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    return await res.json();
};
