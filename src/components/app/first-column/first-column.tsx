"use client";
import { Separator } from "@/components/ui/separator";
import { useGetNotConnected, useGetPreviews } from "@/hooks/hooks";
import { requests } from "@/lib/requests";
import socket from "@/lib/socket";
import { useEffect } from "react";
import FirstColumnBody from "./first-column-body";
import FirstColumnHeader from "./first-column-header";
import { Client } from "@stomp/stompjs";

export default function FirstColumn() {
    const { previews, mutate: mutatePreviews } = useGetPreviews();
    const { mutate: mutateNotConnected } = useGetNotConnected();

    useEffect(() => {
        const handleListenChatRequest = async () => {
            const meId = (await requests.getMe()).data?.id;
            socket.emit("listenChatRequest", `userId-${meId}`);
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
    }, [mutateNotConnected, mutatePreviews]);

    useEffect(() => {
        previews?.forEach((preview) => {
            if (preview) {
                const chatId = preview?.chatId;
                socket.emit("joinChat", `chatId-${chatId}`);

                const client = new Client({
                    brokerURL: "ws://localhost:8080/socket",
                    onStompError: (frame) => {
                        console.error("STOMP error:", frame.headers.message);
                    },
                    debug: (str) => {
                        console.log(str);
                    },
                });
                client.onConnect = (frame) => {
                    console.log("Connected!", frame);
                    client.subscribe(`/chat/${chatId}`, (message) => {
                        console.log("Message from server:", message.body);
                        socket.emit("sendMessage", `chatId-${chatId}`);
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
