"use client";
import Loading from "@/app/loading";
import Searchbar from "@/components/ui/search";
import { Separator } from "@/components/ui/separator";
import { useGetNotConnected, useGetPreviews } from "@/hooks/hooks";
import { requests } from "@/lib/requests";
import socket from "@/lib/socket";
import { ArrowDown } from "lucide-react";
import { useEffect } from "react";
import AddUserDialog from "./add-user-dialog";
import { Button } from "./button";
import PreviewCard from "./preview-card";

export default function FirstColumn() {
    const {
        previews,
        isLoading,
        isReachingEnd,
        isLoadingMore,
        size,
        setSize,
        mutate: mutatePreviews,
    } = useGetPreviews();
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
    }, []);

    useEffect(() => {
        previews?.forEach((preview) => {
            preview && socket.emit("joinChat", `chatId-${preview.chatId}`);
        });
    }, [previews]);

    if (isLoading) {
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
            <div className="flex h-full flex-col gap-1 overflow-auto px-1 py-1">
                {previews?.map(
                    (preview) =>
                        preview && (
                            <PreviewCard
                                key={preview.chatId}
                                preview={preview}
                            />
                        ),
                )}
                {!isReachingEnd && (
                    <Button
                        variant={"default"}
                        className={
                            "mt-2 shrink-0 animate-bounce self-center rounded-full"
                        }
                        disabled={isLoadingMore}
                        onClick={() => setSize(size + 1)}
                        size={"icon"}
                    >
                        <ArrowDown />
                    </Button>
                )}
            </div>
        </div>
    );
}
