import { ChatType } from "@/lib/type";
import { Avatar, AvatarImage } from "./avatar";

export default function ConversationHeader({ chat }: { chat: ChatType }) {
    return (
        <div className={"flex items-center justify-between px-4 py-3"}>
            <div className="flex items-center">
                <Avatar>
                    <AvatarImage src={chat.user.avatar} />
                </Avatar>

                <div className="ml-4 text-lg">
                    <p className="line-clamp-1 font-semibold">
                        {chat.user.name}
                    </p>
                </div>
            </div>
        </div>
    );
}
