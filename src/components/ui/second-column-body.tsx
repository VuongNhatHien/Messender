"use client";
import { formatFileSize } from "@/lib/utils";
import { ChatType, MessageResponseType } from "@/types/response.type";
import { AttachmentType, MetadataType } from "@/types/schema.type";
import { File } from "lucide-react";
import Image from "next/image";
import useSWR from "swr";

const isImage = (type: string) => type.includes("image");
const isVideo = (type: string) => type.includes("video");
const isAudio = (type: string) => type.includes("audio");

const ImageAttachment = ({ attachment }: { attachment: AttachmentType }) => (
    <a href={attachment.url} target="_blank">
        <Image
            width={320}
            height={320}
            src={attachment.url}
            alt="attachment"
            className="rounded-lg hover:opacity-75"
        />
    </a>
);

const VideoAttachment = ({ attachment }: { attachment: AttachmentType }) => (
    <video
        width="320"
        height="240"
        controls
        preload="auto"
        className="cursor-pointer rounded-lg"
    >
        <source src={attachment.url} />
        Your browser does not support the video tag.
    </video>
);

const AudioAttachment = ({ attachment }: { attachment: AttachmentType }) => (
    <audio controls className="cursor-pointer rounded-lg">
        <source src={attachment.url} />
        Your browser does not support the audio tag.
    </audio>
);

const FileAttachment = ({ attachment }: { attachment: AttachmentType }) => (
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

const Message = ({
    content,
    isOwnMessage,
}: {
    content: MessageResponseType;
    isOwnMessage: boolean;
}) => (
    <div
        className={`${content.metadata ? "rounded-t-3xl" : "rounded-3xl"} px-3 py-2 ${
            isOwnMessage
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
        }`}
    >
        {content.metadata ? (
            <a href={content.metadata.url} target="_blank">
                <p className="underline">{content.message}</p>
            </a>
        ) : (
            <p>{content.message}</p>
        )}
    </div>
);

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

const fetcher = (url: string) =>
    fetch(url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .then((res) => res.json())
        .then((result) => result.data);

export default function SecondColumnBody({ chat }: { chat: ChatType }) {
    const { data: messages } = useSWR<MessageResponseType[]>(
        `http://localhost:8080/chats/${chat.id}/messages`,
        fetcher
    );
    return (
        messages && (
            <div className="relative flex h-full flex-col-reverse justify-start gap-4 overflow-auto p-4">
                {messages.slice().map((content) => (
                    <MessageBubble
                        key={content.id}
                        content={content}
                        isOwnMessage={content.senderId !== chat.user.id}
                    />
                ))}
            </div>
        )
    );
}
