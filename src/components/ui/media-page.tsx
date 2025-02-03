import { findFilesInChat, findMediaInChat } from "@/mocks/mock";
import Image from "next/image";
import { CirclePlay } from "lucide-react";
// Media component for rendering images and videos
const MediaItem = ({ file }: { file: any }) => {
    const isImage = file.fileType.includes("image");

    return (
        <div className="relative aspect-square w-full overflow-hidden hover:opacity-75">
            {isImage ? (
                <a href={file.fileUrl} target="_blank">
                    <Image
                        src={file.fileUrl}
                        alt={file.fileName}
                        width={200}
                        height={200}
                        className="h-full w-full object-cover"
                    />
                </a>
            ) : (
                <a
                    href={file.fileUrl}
                    target="_blank"
                    className="block h-full w-full"
                >
                    <div className="relative h-full w-full">
                        <video
                            src={file.fileUrl}
                            preload="metadata"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black bg-opacity-60 rounded-full p-2 border-double">
                                <Image
                                    src={"/play-button.png"}
                                    width={16}
                                    height={16}
                                    alt=""
                                    className="opacity-75"
                                />
                            </div>
                        </div>
                    </div>
                </a>
            )}
        </div>
    );
};

export default function MediaPage({ chatId }: { chatId: string }) {
    const media = findMediaInChat(chatId);

    // Split media files into chunks of 3 for each row
    const rows = [];
    for (let i = 0; i < media.length; i += 3) {
        rows.push(media.slice(i, i + 3));
    }

    return (
        <div className="">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-3 divide-x-2">
                    {row.map((file) => (
                        <MediaItem key={file?.attachmentId} file={file} />
                    ))}
                </div>
            ))}
        </div>
    );
}
