"use client";

import { getMe } from "@/actions/actions.common";
import socket from "@/lib/socket";
import { useEffect } from "react";

export default function Page() {
    useEffect(() => {
        const handleSocket = async () => {
            const meId = (await getMe()).id;
            socket.emit("connectUser", `userId-${meId}`);
        };
        handleSocket();
    }, []);
    return (
        <div className="card flex w-3/4 items-center justify-center">
            <p className={"text-2xl font-bold"}>No chats selected</p>
        </div>
    );
}
