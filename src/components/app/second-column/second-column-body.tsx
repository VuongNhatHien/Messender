"use client";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useGetMessages, useGetUserInChat } from "@/hooks/hooks";
import { formatFileSize } from "@/lib/utils";
import { MessageResponseType } from "@/types/response.type";
import { AttachmentType, MetadataType } from "@/types/schema.type";
import { ArrowUp, File } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "../../ui/button";

const isImage = (type: string) => type.includes("image");
const isVideo = (type: string) => type.includes("video");
const isAudio = (type: string) => type.includes("audio");

const ImageAttachment = ({ attachment }: { attachment: AttachmentType }) =>
    attachment.url ? (
        <a href={attachment.url} target="_blank">
            <Image
                width={320}
                height={320}
                src={attachment.url}
                alt="attachment"
                className="rounded-lg hover:opacity-75"
            />
        </a>
    ) : (
        <div className="relative">
            <Image
                src={"/meo.png"}
                width={320}
                height={320}
                alt="attachment"
                className="rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <LoadingSpinner className="size-14 text-black" />
            </div>
        </div>
    );

const VideoAttachment = ({ attachment }: { attachment: AttachmentType }) =>
    attachment.url ? (
        <video
            src={attachment.url}
            width="320"
            height="240"
            controls
            preload="auto"
            className="cursor-pointer rounded-lg"
        />
    ) : (
        <div className="relative">
            <video
                width="320"
                height="240"
                controls
                className="cursor-pointer rounded-lg bg-foreground"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <LoadingSpinner className="size-14 text-white" />
            </div>
        </div>
    );

const AudioAttachment = ({ attachment }: { attachment: AttachmentType }) =>
    attachment.url && (
        <audio controls className="cursor-pointer rounded-lg">
            <source src={attachment.url} />
            Your browser does not support the audio tag.
        </audio>
    );

const FileAttachment = ({ attachment }: { attachment: AttachmentType }) =>
    attachment.url && (
        <a
            href={attachment.url}
            target="_blank"
            className="flex items-center gap-2 rounded-3xl bg-secondary px-4 py-2 hover:opacity-75"
        >
            <File size={36} />
            <div>
                <p className="font-extrabold">{attachment.name}</p>
                <p className="font-medium text-muted-foreground">
                    {formatFileSize(attachment.size)}
                </p>
            </div>
        </a>
    );

const urlRegex =
    /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/g;

const Message = ({
    content,
    isOwnMessage,
}: {
    content: MessageResponseType;
    isOwnMessage: boolean;
}) => {
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = urlRegex.exec(content.message!)) !== null) {
        if (match.index > lastIndex) {
            parts.push({
                text: content.message!.substring(lastIndex, match.index),
                isUrl: false,
            });
        }
        parts.push({ text: match[0], isUrl: true });
        lastIndex = urlRegex.lastIndex;
    }
    if (lastIndex < content.message!.length) {
        parts.push({
            text: content.message!.substring(lastIndex),
            isUrl: false,
        });
    }

    return (
        <div
            className={`${content.metadata ? "rounded-t-3xl" : "rounded-3xl"} px-3 py-2 ${
                isOwnMessage
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
            }`}
        >
            <p>
                {parts.map((part, index) =>
                    part.isUrl ? (
                        <a
                            key={index}
                            href={part.text}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            {part.text}
                        </a>
                    ) : (
                        <span key={index}>{part.text}</span>
                    ),
                )}
            </p>
        </div>
    );
};

const MetaData = ({ metadata }: { metadata: MetadataType }) => (
    <a href={metadata.url} target="_blank" className="hover:opacity-75">
        {metadata.image && (
            <div className="">
                <Image
                    width={512}
                    height={512}
                    src={metadata.image}
                    alt=""
                    className="h-full w-full"
                />
            </div>
        )}
        <div className="rounded-b-3xl bg-secondary px-3 py-2">
            <p className="font-bold">
                {metadata.title ? metadata.title : metadata.url}
            </p>
        </div>
    </a>
);

const renderAttachment = (attachment: AttachmentType) => {
    if (isImage(attachment.type))
        return <ImageAttachment attachment={attachment} />;
    if (isVideo(attachment.type))
        return <VideoAttachment attachment={attachment} />;
    if (isAudio(attachment.type))
        return <AudioAttachment attachment={attachment} />;
    return <FileAttachment attachment={attachment} />;
};

const MessageBubble = ({
    content,
    isOwnMessage,
}: {
    content: MessageResponseType;
    isOwnMessage: boolean;
}) => (
    <>
        {content.attachment && (
            <div
                className={`${isOwnMessage ? "ml-auto" : ""} w-fit max-w-[75%]`}
            >
                {renderAttachment(content.attachment)}
            </div>
        )}

        {content.message && (
            <div
                className={`${isOwnMessage ? "ml-auto" : ""} ${content.metadata?.image ? "w-[75%]" : "w-fit max-w-[75%]"}`}
            >
                <Message content={content} isOwnMessage={isOwnMessage} />
                {content.metadata && <MetaData metadata={content.metadata} />}
            </div>
        )}
    </>
);

export default function SecondColumnBody() {
    const { chatId } = useParams<{ chatId: string }>();
    const {
        messages,
        isLoading: load1,
        isReachingEnd,
        isLoadingMore,
        size,
        setSize,
    } = useGetMessages(chatId);

    const { user, isLoading: load2 } = useGetUserInChat(chatId);

    if (load1 || load2)
        return (
            <div className="flex h-full items-center justify-center">
                <LoadingSpinner className="size-10" />
            </div>
        );

    return (
        <div className="relative flex h-full flex-col-reverse justify-start gap-4 overflow-auto p-4">
            {messages
                ?.slice()
                .map(
                    (content) =>
                        content && (
                            <MessageBubble
                                key={content.id}
                                content={content}
                                isOwnMessage={content.senderId !== user?.id}
                            />
                        ),
                )}
            {!isReachingEnd && (
                <Button
                    variant={"default"}
                    className={
                        "shrink-0 animate-bounce self-center rounded-full"
                    }
                    disabled={isLoadingMore}
                    onClick={() => setSize(size + 1)}
                    size={"icon"}
                >
                    <ArrowUp />
                </Button>
            )}
        </div>
    );
}
