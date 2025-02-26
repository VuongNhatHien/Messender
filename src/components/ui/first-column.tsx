"use client";
import Loading from "@/app/loading";
import Searchbar from "@/components/ui/search";
import { Separator } from "@/components/ui/separator";
import fetcher from "@/lib/fetcher";
import socket from "@/lib/socket";
import { PreviewMessageType } from "@/types/response.type";
import { useEffect } from "react";
import useSWR from "swr";
import AddUserDialog from "./add-user-dialog";
import PreviewCard from "./preview-card";

export default function FirstColumn() {
    const { data: previews } = useSWR<PreviewMessageType[]>(
        `http://localhost:8080/users/chats`,
        fetcher,
    );

    useEffect(() => {
        previews?.forEach((preview) => {
            socket.emit("joinChat", `chatId-${preview.chatId}`);
        });
    }, [previews]);

    if (!previews) {
        return <Loading />;
    }
    return (
        <div className="card w-1/4">
            <div
                className={"header flex items-center justify-between px-4 py-3"}
            >
                <p className={"text-2xl font-bold"}>Chats</p>

                <AddUserDialog />
            </div>
            <div className={"px-3"}>
                <Searchbar />
            </div>

            <Separator className={"mt-4"} />
            <div className="h-full space-y-1 overflow-auto px-1 py-1">
                {previews.map((preview) => (
                    <PreviewCard key={preview.chatId} preview={preview} />
                ))}
            </div>
        </div>
    );
}
