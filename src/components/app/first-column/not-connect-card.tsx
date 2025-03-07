"use client";
import { addUser } from "@/actions/actions.common";
import { useGetMe } from "@/hooks/hooks";
import socket from "@/lib/socket";
import { UserType } from "@/types/schema.type";
import { Avatar, AvatarImage } from "../../ui/avatar";

export default function NotConnectCard({ user }: { user: UserType }) {
    const { me } = useGetMe();

    const handleAddUser = async () => {
        const chat = await addUser(user.id);

        if (chat) {
            const meId = me?.id;
            const userId =
                meId === chat.user1.id ? chat.user2.id : chat.user1.id;
            socket.emit("addChat", `users/${userId}`);
            window.location.href = `/chats/${chat.id}`;
        }
    };

    return (
        me && (
            <button
                key={user.id}
                className="card-link"
                onClick={() => handleAddUser()}
            >
                <Avatar className="size-12">
                    <AvatarImage
                        src={user.avatar ? user.avatar : "/avatar.png"}
                    />
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
        )
    );
}
