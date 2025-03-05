"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Separator } from "../../ui/separator";
import { uploadFiles } from "./choose-file";
import SecondColumnBodyAndFooter from "./second-column-body-and-footer";
import SecondColumnHeader from "./second-column-header";
export default function SecondColumn() {
    const { chatId } = useParams<{ chatId: string }>();

    const [isOver, setIsOver] = useState(false);

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
