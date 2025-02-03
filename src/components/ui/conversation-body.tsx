import { AttachmentType, ChatType, messageType } from "@/lib/type";
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
        className="flex items-center gap-2 rounded-3xl bg-secondary px-4 py-2"
    >
        <File size={36} />
        <div>
            <p className="font-extrabold">{attachment.fileName}</p>
            <p className="font-medium text-muted-foreground">{`${attachment.fileSize} KB`}</p>
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
    <div className={`flex ${isOwnMessage ? "justify-end" : "justify-start"}`}>
        {content.message && (
            <div
                className={`max-w-[75%] rounded-3xl px-3 py-2 ${
                    isOwnMessage
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                }`}
            >
                <p>{content.message}</p>
            </div>
        )}
        {content.attachment && renderAttachment(content.attachment)}
    </div>
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
