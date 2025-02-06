"use client";
import { addUser } from "@/actions/actions";
import { UserType } from "@/lib/type";
import { Avatar, AvatarImage } from "./avatar";

export default function NotConnectCard({ user }: { user: UserType }) {
    return (
        <button
            key={user.userId}
            className="card-link"
            onClick={async () => {
                await addUser(user.userId);
            }}
        >
            <Avatar className="size-12">
                <AvatarImage src={user.avatar} />
                {/* <AvatarFallback>Null</AvatarFallback> */}
            </Avatar>
            <div className="ml-4">
                <p className="flex truncate font-semibold">{user.name}</p>
                <p className="flex truncate text-muted-foreground">
                    {user.email}
                </p>
            </div>
        </button>
    );
}
