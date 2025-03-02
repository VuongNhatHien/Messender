"use client";
import {
    useGetFiles,
    useGetMedia,
    useGetMessages,
    useGetPreviews,
} from "@/hooks/hooks";
import { useParams } from "next/navigation";
import { useState } from "react";
import { uploadFiles } from "../choose-file";
import { Separator } from "../separator";
import SecondColumnBodyAndFooter from "./second-column-body-and-footer";
import SecondColumnHeader from "./second-column-header";
export default function SecondColumn() {
    const { chatId } = useParams<{ chatId: string }>();
    const { mutate: mutateMessages } = useGetMessages(chatId);
    const { mutate: mutatePreviews } = useGetPreviews();
    const { mutate: mutateMedia } = useGetMedia(chatId);
    const { mutate: mutateFiles } = useGetFiles(chatId);

    const [isOver, setIsOver] = useState(false);

    // Define the event handlers
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsOver(true);
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsOver(false);
    };

    const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsOver(false);

        if (event.dataTransfer.files) {
            await uploadFiles(chatId, event.dataTransfer.files);
            mutateMessages();
            mutatePreviews();
            mutateMedia();
            mutateFiles();
        }
    };
    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className="card w-1/2"
        >
            <>
                <SecondColumnHeader />
                <Separator />
                <SecondColumnBodyAndFooter isOver={isOver} />
            </>
        </div>
    );
}
