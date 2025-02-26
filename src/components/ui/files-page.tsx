"use client";
import { AttachmentType } from "@/types/schema.type";
import { File } from "lucide-react";
import { formatFileSize } from "@/lib/utils";
import { useParams } from "next/navigation";
import useSWR from "swr";
import Loading from "@/app/loading";

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

    const { data: files } = useSWR<AttachmentType[]>(
        `/chats/${chatId}/attachments/files`,
    );
    if (!files) {
        return <Loading />;
    }
    return (
        <div className="space-y-1">
            {files.map((file) => (
                <FileItem key={file.id} file={file} />
            ))}
        </div>
    );
}
