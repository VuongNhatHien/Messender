"use client";

import { useGetUserInChat } from "@/hooks/hooks";
import { Avatar, AvatarImage } from "../../avatar";
import { useParams } from "next/navigation";
import Loading from "@/app/loading";

export default function ThirdColumnInfoHeader() {
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
        </>
    );
}
