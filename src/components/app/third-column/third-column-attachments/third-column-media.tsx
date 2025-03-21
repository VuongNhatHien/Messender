"use client";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useGetMedia } from "@/hooks/hooks";
import { AttachmentType } from "@/types/schema.type";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "../../../ui/button";
const MediaItem = ({ media }: { media: AttachmentType }) => {
    const isImage = media.type.includes("image");

    return (
        <div className="aspect-square w-[32%] overflow-hidden hover:opacity-75">
            {isImage ? (
                media.url ? (
                    <a href={media.url} target="_blank">
                        <Image
                            src={media.url}
                            alt={media.name}
                            width={200}
                            height={200}
                            className="h-full w-full object-cover"
                        />
                    </a>
                ) : (
                    <div className="relative h-full">
                        <Image
                            src={"/meo.png"}
                            alt={media.name}
                            width={200}
                            height={200}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <LoadingSpinner className="size-8 text-black" />
                        </div>
                    </div>
                )
            ) : media.url ? (
                <a
                    href={media.url}
                    target="_blank"
                    // comment "block"
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
            ) : (
                <>
                    <div className="relative h-full w-full">
                        <video className="h-full w-full bg-foreground object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute rounded-full border-double bg-black bg-opacity-60 p-2">
                                <Image
                                    src={"/play-button.png"}
                                    width={16}
                                    height={16}
                                    alt=""
                                    className="opacity-75"
                                />
                            </div>
                            <div className="relative">
                                <LoadingSpinner className="size-9 text-white" />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default function MediaPage() {
    const { chatId } = useParams<{ chatId: string }>();

    const { media, isLoading, isReachingEnd, isLoadingMore, size, setSize } =
        useGetMedia(chatId);
    if (isLoading)
        return (
            <div className="flex h-full items-center justify-center">
                <LoadingSpinner className="size-10" />
            </div>
        );
    return (
        <>
            <div className="flex flex-wrap gap-[2px]">
                {media?.map(
                    (media) =>
                        media && <MediaItem key={media.id} media={media} />,
                )}
            </div>
            <div className="mt-4 flex justify-center">
                {!isReachingEnd && (
                    <Button
                        variant={"default"}
                        className={"shrink-0 animate-bounce rounded-full"}
                        disabled={isLoadingMore}
                        onClick={() => setSize(size + 1)}
                        size={"icon"}
                    >
                        <ArrowDown />
                    </Button>
                )}
            </div>
        </>
    );
}
