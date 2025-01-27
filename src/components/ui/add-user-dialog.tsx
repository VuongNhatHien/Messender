import { addUser } from "@/actions/add-user";
import { Avatar, AvatarImage } from "./avatar";
import { Button } from "./button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./dialog";
import Searchbar from "./search";
import { Separator } from "./separator";
import { not_connected, previews } from "@/mocks/mock";

export default function AddUserDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={"outline"}
                    className={"rounded-full"}
                    size={"icon"}
                >
                    <p className={"text-2xl"}>+</p>
                </Button>
            </DialogTrigger>

            <DialogContent className={"h-[30rem] gap-0"}>
                <DialogHeader>
                    <DialogTitle>New message</DialogTitle>
                    <DialogDescription>
                        Start a new conversation with someone
                    </DialogDescription>
                </DialogHeader>

                <div className={"pt-3"}>
                    <Searchbar />
                </div>

                <Separator className={"mt-4"} />
                <div className="h-full space-y-1 overflow-auto px-1 pt-1">
                    {not_connected.map((user) => (
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
                                <p className="line-clamp-1 flex font-semibold">
                                    {user.name}
                                </p>
                                <p className="line-clamp-1 flex text-muted-foreground">
                                    {user.email}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}
