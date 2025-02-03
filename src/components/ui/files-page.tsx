import { findFilesInChat } from "@/mocks/mock";
import { File } from "lucide-react";


export default function FilePage({ chatId }: { chatId: string }) {
    const files = findFilesInChat(chatId);
    return (
        <div className="space-y-1">
            {files.map((file) => (
                <div key={file?.attachmentId} className="">
                    <a
                        href={file?.fileUrl}
                        target="_blank"
                        className="flex items-center gap-2 hover-custom rounded-sm px-2 py-1"
                    >
                        <File size={36} />
                        <div>
                            <p className="font-extrabold line-clamp-1">
                                {file?.fileName}
                            </p>
                            <p className="font-medium text-muted-foreground">{`${file?.fileSize} KB`}</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
}
