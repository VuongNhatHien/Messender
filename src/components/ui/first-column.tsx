"use client";
import Searchbar from "@/components/ui/search";
import { Separator } from "@/components/ui/separator";
import AddUserDialog from "./add-user-dialog";
import PreviewCard from "./preview-card";
import { requests } from "@/request/requests";
import { useEffect, useState } from "react";
import { PreviewMessageType } from "@/types/response.type";
import socket from "@/lib/socket";

export default function FirstColumn() {
    const [previews, setPreview] = useState<PreviewMessageType[]>([]);
   
    useEffect(() => {
        const fetchRequest = async () => {
            const res = (await requests.getPreviews()).data;
            setPreview(res);
        };
        fetchRequest();
    }, []);
    useEffect(() => {
        previews.forEach((preview) => {
            socket.emit("joinChat", preview.chatId.toString());
        });
    }, [previews]);
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
