"use client";

import SecondColumn from "@/components/app/second-column/second-column";
import ThirdColumn from "@/components/app/third-column/third-column";
import {
    useGetFiles,
    useGetLinks,
    useGetMedia,
    useGetMessages,
    useGetPreviews,
} from "@/hooks/hooks";
import socket from "@/lib/socket";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const { chatId } = useParams<{ chatId: string }>();
    const { mutate: mutateMessage } = useGetMessages(chatId);
    const { mutate: mutatePreviews } = useGetPreviews();
    const { mutate: mutateMedia } = useGetMedia(chatId);
    const { mutate: mutateFiles } = useGetFiles(chatId);
    const { mutate: mutateLinks } = useGetLinks(chatId);

    useEffect(() => {
        mutateMessage();
        const handleReceiveMessage = () => {
            mutateMessage();
            mutatePreviews();
            mutateMedia();
            mutateFiles();
            mutateLinks();
        };

        socket.on("receiveMessage", handleReceiveMessage);

        return () => {
            socket.off("receiveMessage", handleReceiveMessage);
        };
    }, [
        chatId,
        mutateFiles,
        mutateLinks,
        mutateMedia,
        mutateMessage,
        mutatePreviews,
    ]);

    return (
        <>
            <SecondColumn />
            <ThirdColumn />
        </>
    );
}
