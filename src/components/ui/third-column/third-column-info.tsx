"use client";

import Loading from "@/app/loading";
import { useGetUserInChat } from "@/hooks/hooks";
import { useParams } from "next/navigation";
import { File, Image as ImageLucide, Link as LinkLucide } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Avatar, AvatarImage } from "../avatar";

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

export default function ThirdColumnInfo({
    page,
    setPage,
}: {
    page: string;
    setPage: Dispatch<SetStateAction<string>>;
}) {
    const { chatId } = useParams<{ chatId: string }>();

    const { user, isLoading } = useGetUserInChat(chatId);
    if (isLoading) return <Loading />;

    return (
        <>
            <Avatar className="size-20">
                <AvatarImage src={user?.avatar ? user.avatar : `/avatar.png`} />
            </Avatar>
            <div className="mt-2 text-center">
                <p className="text-xl font-semibold">{user?.displayName}</p>
            </div>
            <div className="mt-4 w-full">
                {attachmentCards.map((attachment, index) => (
                    <button
                        key={index}
                        className="card-link gap-2 py-3"
                        onClick={() => setPage(attachment.name.toLowerCase())}
                    >
                        {attachment.icon}
                        <p className="font-semibold">{attachment.name}</p>
                    </button>
                ))}
            </div>
        </>
    );
}
