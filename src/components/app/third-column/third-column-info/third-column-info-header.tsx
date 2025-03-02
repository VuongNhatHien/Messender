"use client";

import { useGetUserInChat } from "@/hooks/hooks";
import { Avatar, AvatarImage } from "../../../ui/avatar";
import { useParams } from "next/navigation";
import Loading from "@/app/loading";
import ThirdColumnInfoHeaderSkeleton from "@/components/skeleton/third-column-info-header-skeleton";

export default function ThirdColumnInfoHeader() {
    const { chatId } = useParams<{ chatId: string }>();

    const { user, isLoading } = useGetUserInChat(chatId);
    if (isLoading) return <ThirdColumnInfoHeaderSkeleton />;
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
