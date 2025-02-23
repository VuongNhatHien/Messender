"use client";
import { AttachmentType } from "@/types/schema.type";
import { File } from "lucide-react";
import { formatFileSize } from "@/lib/utils";
import { ChatType } from "@/types/response.type";

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

const isFile = (file: AttachmentType) => {
    return !file.type.includes("image") && !file.type.includes("video");
};

export default function FilePage({ chat }: { chat: ChatType }) {
    return (
        <div className="space-y-1">
            {chat.messages.map(
                (chat) =>
                    chat.attachment &&
                    isFile(chat.attachment) && (
                        <FileItem
                            key={chat.attachmentId}
                            file={chat.attachment}
                        />
                    ),
            )}
        </div>
    );
}
