import {
    AttachmentType,
    ChatType,
    messageType,
    MetadataType,
} from "@/lib/type";
import { File } from "lucide-react";
import Image from "next/image";

const isImage = (type: string) => type.includes("image");
const isVideo = (type: string) => type.includes("video");
const isAudio = (type: string) => type.includes("audio");

// Attachment components
const ImageAttachment = ({ attachment }: { attachment: AttachmentType }) => (
    <a href={attachment.fileUrl} target="_blank">
        <Image
            width={128}
            height={128}
            src={attachment.fileUrl}
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
        <source src={attachment.fileUrl} />
        Your browser does not support the video tag.
    </video>
);

const AudioAttachment = ({ attachment }: { attachment: AttachmentType }) => (
    <audio controls className="cursor-pointer rounded-lg bg-secondary">
        <source src={attachment.fileUrl} />
        Your browser does not support the audio tag.
    </audio>
);

const FileAttachment = ({ attachment }: { attachment: AttachmentType }) => (
    <a
        href={attachment.fileUrl}
        target="_blank"
        className="flex items-center gap-2 rounded-3xl bg-secondary px-4 py-2 hover:opacity-75"
    >
        <File size={36} />
        <div>
            <p className="font-extrabold">{attachment.fileName}</p>
            <p className="font-medium text-muted-foreground">{`${attachment.fileSize} KB`}</p>
        </div>
    </a>
);

const Message = ({
    content,
    isOwnMessage,
}: {
    content: messageType;
    isOwnMessage: boolean;
}) => (
    <div
        className={`rounded-${content.metadata ? "t-" : ""}3xl px-3 py-2 ${
            isOwnMessage
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
        }`}
    >
        <p>{content.message}</p>
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

const renderAttachment = (attachment: any) => {
    if (isImage(attachment.fileType))
        return <ImageAttachment attachment={attachment} />;
    if (isVideo(attachment.fileType))
        return <VideoAttachment attachment={attachment} />;
    if (isAudio(attachment.fileType))
        return <AudioAttachment attachment={attachment} />;
    return <FileAttachment attachment={attachment} />;
};

// Message bubble component
const MessageBubble = ({
    content,
    isOwnMessage,
}: {
    content: messageType;
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

export default function ConversationBody({ chat }: { chat: ChatType }) {
    return (
        <div className="flex h-full flex-col-reverse justify-start gap-4 overflow-auto p-4">
            {chat.messages
                .slice()
                .reverse()
                .map((content) => (
                    <MessageBubble
                        key={content.messageId}
                        content={content}
                        isOwnMessage={
                            content.sender.userId !== chat.user.userId
                        }
                    />
                ))}
        </div>
    );
}