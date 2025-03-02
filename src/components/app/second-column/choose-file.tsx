"use client";
import { uploadFile } from "@/actions/actions.common";
import {
    useGetFiles,
    useGetMedia,
    useGetMessages,
    useGetPreviews,
} from "@/hooks/hooks";
import socket from "@/lib/socket";
import { Paperclip } from "lucide-react";

export const uploadFiles = async (chatId: string, files: FileList) => {
    for (let i = 0; i < files.length; i++) {
        await uploadFile(chatId, files[i]);
        socket.emit("sendMessage", `chatId-${chatId}`);
    }
};

export default function ChooseFile({ chatId }: { chatId: string }) {
    const { mutate: mutateMessages } = useGetMessages(chatId);
    const { mutate: mutatePreviews } = useGetPreviews();
    const { mutate: mutateMedia } = useGetMedia(chatId);
    const { mutate: mutateFiles } = useGetFiles(chatId);
    const handleUploadFiles = async (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        if (event.target.files) {
            await uploadFiles(chatId, event.target.files);
            mutateMessages();
            mutatePreviews();
            mutateMedia();
            mutateFiles();
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
