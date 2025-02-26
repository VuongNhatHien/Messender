"use client";

import Loading from "@/app/loading";
import { UserType } from "@/types/schema.type";
import { File, Image as ImageLucide, Link as LinkLucide } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import useSWR from "swr";
import Attachments from "./attachments";
import { Avatar, AvatarImage } from "./avatar";

const attachmentCards = [
    {
        name: "Media",
        icon: <ImageLucide />,
    },
    {
        name: "Files",
        icon: <File />,
    },
    {
        name: "Links",
        icon: <LinkLucide />,
    },
];

export default function ThirdColumn() {
    const [page, setPage] = useState("default");

    const { chatId } = useParams<{ chatId: string }>();

    const { data: user } = useSWR<UserType>(`/chats/${chatId}/users`);
    if (!user) {
        return <Loading />;
    }

    return (
        <div className="card w-1/4 items-center overflow-auto px-3 py-4">
            {page === "default" ? (
                <>
                    <Avatar className="size-20">
                        <AvatarImage
                            src={user.avatar ? user.avatar : `/avatar.png`}
                        />
                    </Avatar>
                    <div className="mt-2 text-center">
                        <p className="text-xl font-semibold">
                            {user.displayName}
                        </p>
                    </div>
                    <div className="mt-4 w-full">
                        {attachmentCards.map((attachment, index) => (
                            <button
                                key={index}
                                className="card-link gap-2 py-3"
                                onClick={() =>
                                    setPage(attachment.name.toLowerCase())
                                }
                            >
                                {attachment.icon}
                                <p className="font-semibold">
                                    {attachment.name}
                                </p>
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <Attachments page={page} setPage={setPage} />
            )}
        </div>
    );
}
