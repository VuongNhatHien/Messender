"use client";
import { ChatType } from "@/types/response.type";
import { AttachmentType } from "@/types/schema.type";
import Image from "next/image";
const MediaItem = ({ media }: { media: AttachmentType }) => {
    const isImage = media.type.includes("image");

    return (
        <div className="aspect-square w-[32%] overflow-hidden hover:opacity-75">
            {isImage ? (
                <a href={media?.url} target="_blank">
                    <Image
                        src={media.url}
                        alt={media.name}
                        width={200}
                        height={200}
                        className="h-full w-full object-cover"
                    />
                </a>
            ) : (
                <a
                    href={media.url}
                    target="_blank"
                    //comment "block"
                    className="h-full w-full"
                >
                    <div className="relative h-full w-full">
                        <video
                            src={media.url}
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

const isMedia = (file: AttachmentType) => {
    return file.type.includes("image") || file.type.includes("video");
};

export default function MediaPage({ chat }: { chat: ChatType }) {
    return (
        <div className="flex flex-wrap gap-[2px]">
            {chat.messages.map(
                (chat) =>
                    chat.attachment &&
                    isMedia(chat.attachment) && (
                        <MediaItem
                            key={chat.attachmentId}
                            media={chat.attachment}
                        />
                    ),
            )}
        </div>
    );
}
