import { AttachmentType } from "@/lib/type";
import { FindMediaInChat } from "@/mocks/mock";
import Image from "next/image";
const MediaItem = ({ file }: { file: AttachmentType }) => {
    const isImage = file.fileType.includes("image");

    return (
        <div className="aspect-square w-[32%] overflow-hidden hover:opacity-75">
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
                    //comment "block"
                    className="h-full w-full"
                >
                    <div className="relative h-full w-full">
                        <video
                            src={file.fileUrl}
                            preload="metadata"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="rounded-full border-double bg-black bg-opacity-60 p-2">
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
    const media = FindMediaInChat(chatId);

    return (
        <div className="flex flex-wrap gap-[2px]">
            {media.map((media) => (
                <MediaItem key={media?.attachmentId} file={media!} />
            ))}
        </div>
    );
}
