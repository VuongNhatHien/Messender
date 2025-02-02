import { ChatType } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";
import { File, Link as LinkLucide } from "lucide-react";

const isImage = (type: string) => {
    return type.includes("image");
};

const isVideo = (type: string) => {
    return type.includes("video");
};

const isAudio = (type: string) => {
    return type.includes("audio");
};

export default function ConversationBody({ chat }: { chat: ChatType }) {
    return (
        <div className="flex h-full flex-col-reverse justify-start gap-4 overflow-auto p-4">
            {chat.messages
                .slice()
                .reverse()
                .map((content, index) => (
                    <div
                        key={index}
                        className={`flex ${
                            content.sender.userId === chat.user.userId
                                ? "justify-start"
                                : "justify-end"
                        }`}
                    >
                        {content.message && (
                            <div
                                className={`max-w-[75%] rounded-3xl px-3 py-2 ${
                                    content.sender.userId === chat.user.userId
                                        ? "bg-secondary text-secondary-foreground"
                                        : "bg-primary text-primary-foreground"
                                }`}
                            >
                                <p>{content.message}</p>
                            </div>
                        )}
                        {content.attachment &&
                            (isImage(content.attachment.fileType) ? (
                                <a
                                    href={content.attachment.fileUrl}
                                    target="_blank"
                                >
                                    <Image
                                        width={128}
                                        height={128}
                                        src={content.attachment.fileUrl}
                                        alt="attachment"
                                        className="rounded-lg hover:opacity-75"
                                    />
                                </a>
                            ) : isVideo(content.attachment.fileType) ? (
                                <>
                                    <video
                                        width="320"
                                        height="240"
                                        controls
                                        preload="auto"
                                        className="cursor-pointer rounded-lg"
                                    >
                                        <source
                                            src={content.attachment.fileUrl}
                                        />
                                        {/* <track
                                            src="/path/to/captions.vtt"
                                            kind="subtitles"
                                            srcLang="en"
                                            label="English"
                                        /> */}
                                        Your browser does not support the video
                                        tag.
                                    </video>
                                </>
                            ) : isAudio(content.attachment.fileType) ? (
                                <>
                                    <audio
                                        controls
                                        className="cursor-pointer rounded-lg bg-secondary"
                                    >
                                        <source
                                            src={content.attachment.fileUrl}
                                        />
                                        Your browser does not support the audio
                                        tag.
                                    </audio>
                                </>
                            ) : (
                                <a
                                    href={content.attachment.fileUrl}
                                    target="_blank"
                                    className="flex items-center gap-2 rounded-3xl bg-secondary px-4 py-2"
                                >
                                    <File size={36} />
                                    <div>
                                        <p className="font-extrabold">
                                            {content.attachment.fileName}
                                        </p>
                                        <p className="font-medium text-muted-foreground">{`${content.attachment.fileSize} KB`}</p>
                                    </div>
                                </a>
                            ))}
                    </div>
                ))}
        </div>
    );
}
