"use client";
import Loading from "@/app/loading";
import fetcher from "@/lib/fetcher";
import { AttachmentType } from "@/types/schema.type";
import Image from "next/image";
import { useParams } from "next/navigation";
import useSWR from "swr";
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

export default function MediaPage() {
    const { chatId } = useParams<{ chatId: string }>();

    const { data: media } = useSWR<AttachmentType[]>(
        `http://localhost:8080/chats/${chatId}/attachments/media`,
        fetcher,
    );
    if (!media) {
        return <Loading />;
    }
    return (
        <div className="flex flex-wrap gap-[2px]">
            {media.map((media) => (
                <MediaItem key={media.id} media={media} />
            ))}
        </div>
    );
}
