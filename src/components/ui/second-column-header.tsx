import { ChatType } from "@/types/response.type";
import { Avatar, AvatarImage } from "./avatar";

export default function SecondColumnHeader({ chat }: { chat: ChatType }) {
    return (
        <div className={"flex items-center justify-between px-4 py-3"}>
            <div className="flex items-center">
                <Avatar>
                    <AvatarImage
                        src={
                            chat.user.avatar ? chat.user.avatar : `/avatar.png`
                        }
                    />
                </Avatar>

                <div className="ml-4 text-lg">
                    <p className="line-clamp-1 font-semibold">
                        {chat.user.displayName}
                    </p>
                </div>
            </div>
        </div>
    );
}
