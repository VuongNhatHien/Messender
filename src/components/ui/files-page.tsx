import { AttachmentType } from "@/types/schema.type";
import { FindFilesInChat } from "@/mocks/mock";
import { File } from "lucide-react";
import { useEffect, useState } from "react";
import { requests } from "@/request/requests";
import { formatFileSize } from "@/lib/utils";

const FileItem = ({ file }: { file: AttachmentType | null }) => {
    return (
        <a
            href={file?.url}
            target="_blank"
            className="hover-custom flex items-center gap-2 rounded-sm py-1 pe-2"
        >
            <div className="flex size-[52px] shrink-0 items-center justify-center rounded-xl bg-muted">
                <File size={36} className="" />
            </div>
            <div className="overflow-hidden">
                <p className="truncate font-extrabold">{file?.name}</p>
                <p className="font-medium text-muted-foreground">
                    {formatFileSize(file?.size!)}
                </p>
            </div>
        </a>
    );
};

export default function FilePage({ chatId }: { chatId: string }) {
    const [files, setFiles] = useState<AttachmentType[]>([]);
    useEffect(() => {
        const fetchRequest = async () => {
            try {
                const result = await requests.getFiles(chatId);
                setFiles(result.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchRequest();
    }, []);
    return (
        <div className="space-y-1">
            {files.map((file) => (
                <FileItem key={file?.id} file={file} />
            ))}
        </div>
    );
}
