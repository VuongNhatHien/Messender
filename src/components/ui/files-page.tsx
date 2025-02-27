"use client";
import Loading from "@/app/loading";
import { useGetFiles } from "@/hooks/hooks";
import { formatFileSize } from "@/lib/utils";
import { AttachmentType } from "@/types/schema.type";
import { ArrowDown, File } from "lucide-react";
import { useParams } from "next/navigation";
import { Button } from "./button";

const FileItem = ({ file }: { file: AttachmentType }) => {
    return (
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
    );
};

export default function FilePage() {
    const { chatId } = useParams<{ chatId: string }>();

    const { files, isLoading, isReachingEnd, isLoadingMore, size, setSize } =
        useGetFiles(chatId);
    if (isLoading) return <Loading />;
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
