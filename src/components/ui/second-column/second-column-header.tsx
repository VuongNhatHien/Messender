import { useGetUserInChat } from "@/hooks/hooks";
import { useParams } from "next/navigation";
import { Avatar, AvatarImage } from "../avatar";
import Loading from "@/app/loading";

export default function SecondColumnHeader() {
    const { chatId } = useParams<{ chatId: string }>();

    const { user, isLoading } = useGetUserInChat(chatId);

    if (isLoading) return <Loading />;
    return (
        <div className={"flex items-center justify-between px-4 py-3"}>
            <div className="flex items-center">
                <Avatar>
                    <AvatarImage
                        src={user?.avatar ? user.avatar : `/avatar.png`}
                    />
                </Avatar>

                <div className="ml-4 text-lg">
                    <p className="line-clamp-1 font-semibold">
                        {user?.displayName}
                    </p>
                </div>
            </div>
        </div>
    );
}
