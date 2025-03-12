"use client";
import { Separator } from "@/components/ui/separator";
import { useGetMe, useGetNotConnected, useGetPreviews } from "@/hooks/hooks";
import socket from "@/lib/socket";
import { Client } from "@stomp/stompjs";
import { useEffect } from "react";
import FirstColumnBody from "./first-column-body";
import FirstColumnHeader from "./first-column-header";
import { useSearch } from "@/hooks/useSearch";

export default function FirstColumn() {
    const { searchNotConnected, searchPreviews } = useSearch();
    const { previews, mutate: mutatePreviews } = useGetPreviews(searchPreviews);
    const { mutate: mutateNotConnected } =
        useGetNotConnected(searchNotConnected);
    const { me } = useGetMe();

    useEffect(() => {
        const handleListenChatRequest = async () => {
            if (!me) return;
            const meId = me.id;
            socket.emit("listenChatRequest", `users/${meId}`);
        };
        handleListenChatRequest();

        const handleReceiveMessage = () => {
            mutatePreviews();
        };

        const handleReceiveChatRequest = () => {
            mutatePreviews();
            mutateNotConnected();
        };

        socket.on("receiveMessage", handleReceiveMessage);
        socket.on("receiveChatRequest", handleReceiveChatRequest);

        return () => {
            socket.off("receiveMessage", handleReceiveMessage);
            socket.off("receiveChatRequest", handleReceiveChatRequest);
        };
    }, [
        mutateNotConnected,
        mutatePreviews,
        me,
    ]);

    useEffect(() => {
        previews?.forEach((preview) => {
            if (preview) {
                const chatId = preview?.chatId;
                socket.emit("joinChat", `chats/${chatId}`);

                const client = new Client({
                    brokerURL: `${process.env.NEXT_PUBLIC_WEB_SOCKET_URL}`,

                    onStompError: (frame) => {
                        console.error("STOMP error:", frame.headers.message);
                    },
                    // debug: (str) => {
                    //     console.log(str);
                    // },
                });
                client.onConnect = (frame) => {
                    console.log("Connected!", frame);
                    client.subscribe(`/chat/${chatId}`, (message) => {
                        console.log("Message from server:", message.body);
                        socket.emit("sendMessage", `chats/${chatId}`);
                    });
                };
                client.activate();
            }
        });
    }, [previews]);

    return (
        <div className="card w-1/4">
            <FirstColumnHeader />
            <Separator className={"mt-4"} />
            <FirstColumnBody />
        </div>
    );
}
