import Loading from "@/app/loading";
import fetcher from "@/lib/fetcher";
import { UserType } from "@/types/schema.type";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { Avatar, AvatarImage } from "./avatar";

export default function SecondColumnHeader() {
    const { chatId } = useParams<{ chatId: string }>();

    const { data: user } = useSWR<UserType>(
        `http://localhost:8080/chats/${chatId}/users`,
        fetcher,
    );
    if (!user) {
        return <Loading />;
    }
    return (
        <div className={"flex items-center justify-between px-4 py-3"}>
            <div className="flex items-center">
                <Avatar>
                    <AvatarImage
                        src={user.avatar ? user.avatar : `/avatar.png`}
                    />
                </Avatar>

                <div className="ml-4 text-lg">
                    <p className="line-clamp-1 font-semibold">
                        {user.displayName}
                    </p>
                </div>
            </div>
        </div>
    );
}
