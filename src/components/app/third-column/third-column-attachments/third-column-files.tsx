"use client";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useGetFiles } from "@/hooks/hooks";
import { formatFileSize } from "@/lib/utils";
import { AttachmentType } from "@/types/schema.type";
import { ArrowDown, File } from "lucide-react";
import { useParams } from "next/navigation";
import { Button } from "../../../ui/button";

const FileItem = ({ file }: { file: AttachmentType }) => {
    return (
        file.url && (
            <a
                href={file.url}
                target="_blank"
                className="hover-custom flex items-center gap-2 rounded-sm py-1 pe-2"
            >
                <div className="flex size-[52px] shrink-0 items-center justify-center rounded-xl bg-muted">
                    <File size={36} className="" />
                </div>
                <div className="overflow-hidden">
                    <p className="truncate font-extrabold">{file.name}</p>
                    <p className="font-medium text-muted-foreground">
                        {formatFileSize(file.size!)}
                    </p>
                </div>
            </a>
        )
    );
};

export default function FilePage() {
    const { chatId } = useParams<{ chatId: string }>();

    const { files, isLoading, isReachingEnd, isLoadingMore, size, setSize } =
        useGetFiles(chatId);
    if (isLoading)
        return (
            <div className="flex h-full items-center justify-center">
                <LoadingSpinner className="size-10" />
            </div>
        );
    return (
        <div className="flex flex-col gap-1">
            {files?.map(
                (file) => file && <FileItem key={file.id} file={file} />,
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
    );
}
