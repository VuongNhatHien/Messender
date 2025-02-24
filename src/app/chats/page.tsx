"use client";

import socket from "@/lib/socket";
import { requests } from "@/request/requests";
import { useEffect } from "react";

export default function Page() {
    useEffect(() => {
        const handleSocket = async () => {
            const meId = (await requests.getMe()).data?.id;
            socket.emit("listenChatRequest", `userId-${meId}`);
        };
        handleSocket();
    }, []);
    return (
        <div className="card flex w-3/4 items-center justify-center">
            <p className={"text-2xl font-bold"}>No chats selected</p>
        </div>
    );
}
