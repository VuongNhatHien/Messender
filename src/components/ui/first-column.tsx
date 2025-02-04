"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Searchbar from "@/components/ui/search";
import { Separator } from "@/components/ui/separator";
import { previews } from "@/mocks/mock";
import Link from "next/link";
import { useParams } from "next/navigation";
import AddUserDialog from "./add-user-dialog";

export default function FirstColumn() {
    const chatId = useParams<{ chatId: string }>().chatId;
    return (
        <div className="card w-1/4">
            <div
                className={"header flex items-center justify-between px-4 py-3"}
            >
                <p className={"text-2xl font-bold"}>Chats</p>

                <AddUserDialog />
            </div>
            <div className={"px-3"}>
                <Searchbar />
            </div>

            <Separator className={"mt-4"} />
            <div className="h-full space-y-1 overflow-auto px-1 py-1">
                {previews.map((preview) => (
                    <Link
                        key={preview.chatId}
                        className={`card-link ${chatId === `${preview.chatId}` ? "border-2 bg-accent shadow" : "text-accent-foreground"}`}
                        href={`/chats/${preview.chatId}`}
                    >
                        <Avatar className="size-12">
                            <AvatarImage src={preview.user.avatar} />
                            {/* <AvatarFallback>Null</AvatarFallback> */}
                        </Avatar>

                        <div className="ml-4 w-full overflow-hidden">
                            <p className="truncate font-semibold">
                                {preview.user.name}
                            </p>
                            <p className="truncate text-muted-foreground">
                                {preview.lastMessage}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
