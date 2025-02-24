"use client";
import socket from "@/lib/socket";
import { requests } from "@/request/requests";
import { Paperclip } from "lucide-react";

export const uploadFiles = async (chatId: string, files: FileList) => {
    if (files) {
        for (let i = 0; i < files.length; i++) {
            const formData = new FormData();
            formData.append("attachment", files[i]);
            const res = (await requests.uploadFile(chatId, formData)).data;
            socket.emit("sendMessage", {
                chatId: `chatId-${chatId}`,
                message: res,
            });
        }
    }
};

export default function ChooseFile({ chatId }: { chatId: string }) {
    const hanldeOnChange = async (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        if (event.target.files) {
            await uploadFiles(chatId, event.target.files);
        }
    };
    return (
        <>
            <label htmlFor="file">
                <Paperclip className="cursor-pointer hover:text-primary" />
            </label>
            <input
                id="file"
                type="file"
                className="hidden"
                multiple
                onChange={hanldeOnChange}
            />
        </>
    );
}
