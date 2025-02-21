import { AttachmentType } from "@/types/schema-type";
import { FindFilesInChat } from "@/mocks/mock";
import { File } from "lucide-react";

const FileItem = ({ file }: { file: AttachmentType | null }) => {
    return (
        <a
            href={file?.fileUrl}
            target="_blank"
            className="hover-custom flex items-center gap-2 rounded-sm py-1 pe-2"
        >
            <div className="flex size-[52px] shrink-0 items-center justify-center rounded-xl bg-muted">
                <File size={36} className="" />
            </div>
            <div className="overflow-hidden">
                <p className="truncate font-extrabold">{file?.fileName}</p>
                <p className="font-medium text-muted-foreground">{`${file?.fileSize} KB`}</p>
            </div>
        </a>
    );
};

export default function FilePage({ chatId }: { chatId: string }) {
    const files = FindFilesInChat(chatId);
    return (
        <div className="space-y-1">
            {files.map((file) => (
                <FileItem key={file?.attachmentId} file={file} />
            ))}
        </div>
    );
}
