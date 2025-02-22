"use client";
import { addUser } from "@/actions/actions.common";
import { UserType } from "@/types/schema.type";
import { Avatar, AvatarImage } from "./avatar";

export default function NotConnectCard({ user }: { user: UserType }) {
    return (
        <button
            key={user.id}
            className="card-link"
            onClick={async () => {
                await addUser(user.id);
            }}
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
