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
import { Client } from "@stomp/stompjs";

export default function Page() {
    const { chatId } = useParams<{ chatId: string }>();
    const { mutate: mutateMessage } = useGetMessages(chatId);
    const { mutate: mutatePreviews } = useGetPreviews();
    const { mutate: mutateMedia } = useGetMedia(chatId);
    const { mutate: mutateFiles } = useGetFiles(chatId);
    const { mutate: mutateLinks } = useGetLinks(chatId);

    useEffect(() => {
        const client = new Client({
            brokerURL: "ws://localhost:8080/socket",
            onConnect: (frame) => {
                console.log("Connected!", frame);
                client.subscribe(`/chat/${chatId}`, (message) => {
                    console.log("Message from server:", message.body);
                    mutateMessage();
                    mutatePreviews();
                    mutateMedia();
                    mutateFiles();
                    mutateLinks();
                });
            },
            onStompError: (frame) => {
                console.error("STOMP error:", frame.headers.message);
            },
            debug: (str) => {
                console.log(str);
            },
        });

        client.activate();

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
            client.deactivate();
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
