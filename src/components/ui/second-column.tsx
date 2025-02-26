"use client";
import { FolderUp } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { uploadFiles } from "./choose-file";
import SecondColumnBody from "./second-column-body";
import SecondColumnFooter from "./second-column-footer";
import SecondColumnHeader from "./second-column-header";
import { Separator } from "./separator";
export default function SecondColumn() {
    const { chatId } = useParams<{ chatId: string }>();

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
                <div className="relative flex h-full flex-col overflow-hidden">
                    <SecondColumnBody />
                    <SecondColumnFooter />
                    {isOver && (
                        <div className="absolute inset-0 flex h-full flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-foreground bg-background opacity-85">
                            <p className="text-2xl font-bold text-secondary-foreground">
                                Drop files here
                            </p>
                            <FolderUp size={48} />
                        </div>
                    )}
                </div>
            </>
        </div>
    );
}
