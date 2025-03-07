"use client";

export const fetcher = async (url: string) => {
    const baseUrl = "http://localhost:8080";
    const fullUrl = url.startsWith("/")
        ? `${baseUrl}${url}`
        : `${baseUrl}/${url}`;

    console.log("Base url: ", baseUrl);
    console.log("Full url: ", fullUrl);

    // await new Promise((resolve) => setTimeout(resolve, 2000000));

    const res = await fetch(fullUrl, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    return await res.json();
};
