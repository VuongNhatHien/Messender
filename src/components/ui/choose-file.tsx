"use client";
import { uploadFile } from "@/actions/actions.common";
import { useGetMessages, useGetPreviews } from "@/hooks/hooks";
import socket from "@/lib/socket";
import { Paperclip } from "lucide-react";
import { mutate } from "swr";

export const uploadFiles = async (chatId: string, files: FileList) => {
    for (let i = 0; i < files.length; i++) {
        await uploadFile(chatId, files[i]);
        socket.emit("sendMessage", `chatId-${chatId}`);
    }
};

export default function ChooseFile({ chatId }: { chatId: string }) {
    const { mutate: mutateMessages } = useGetMessages(chatId);
    const { mutate: mutatePreviews } = useGetPreviews();
    const handleUploadFiles = async (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        if (event.target.files) {
            await uploadFiles(chatId, event.target.files);
            mutateMessages();
            mutatePreviews();
            mutate(`/chats/${chatId}/attachments/media`);
            mutate(`/chats/${chatId}/attachments/files`);
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
                onChange={handleUploadFiles}
            />
        </>
    );
}
