import SecondColumnHeaderSkeleton from "@/components/skeleton/second-column-header-skeleton";
import { useGetUserInChat } from "@/hooks/hooks";
import { useParams } from "next/navigation";
import { Avatar, AvatarImage } from "../../ui/avatar";

export default function SecondColumnHeader() {
    const { chatId } = useParams<{ chatId: string }>();

    const { user, isLoading } = useGetUserInChat(chatId);

    if (isLoading) return <SecondColumnHeaderSkeleton />;
    return (
        <div className={"flex items-center px-4 py-3"}>
            <Avatar>
                <AvatarImage src={user?.avatar ? user.avatar : `/avatar.png`} />
            </Avatar>

            <div className="ml-4 text-lg">
                <p className="line-clamp-1 font-semibold">
                    {user?.displayName}
                </p>
            </div>
        </div>
    );
}
