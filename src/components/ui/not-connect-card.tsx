"use client";
import { addUser, getMe } from "@/actions/actions.common";
import { UserType } from "@/types/schema.type";
import { Avatar, AvatarImage } from "./avatar";
import socket from "@/lib/socket";

export default function NotConnectCard({ user }: { user: UserType }) {
    const handleAddUser = async () => {
        const chat = await addUser(user.id);
        console.log("Chat", chat);
        if (chat) {
            const meId = (await getMe()).id;
            const userId =
                meId === chat.user1.id ? chat.user2.id : chat.user1.id;
            socket.emit("connectUser", `userId-${userId}`);
            socket.emit("addChat", { userId: `userId-${userId}`, chat });
        }
    };
    return (
        <button
            key={user.id}
            className="card-link"
            onClick={() => handleAddUser()}
        >
            <Avatar className="size-12">
                <AvatarImage src={user.avatar ? user.avatar : "/avatar.png"} />
            </Avatar>
            <div className="ml-4">
                <p className="flex truncate font-semibold">
                    {user.displayName}
                </p>
                <p className="flex truncate text-muted-foreground">
                    {user.username}
                </p>
            </div>
        </button>
    );
}
