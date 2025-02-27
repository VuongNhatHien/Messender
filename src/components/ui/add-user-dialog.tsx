import Loading from "@/app/loading";
import { useGetNotConnected } from "@/hooks/hooks";
import { Button } from "./button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./dialog";
import NotConnectCard from "./not-connect-card";
import Searchbar from "./search";
import { Separator } from "./separator";
import { ArrowDown } from "lucide-react";

export default function AddUserDialog() {
    const { users, isLoading, isReachingEnd, isLoadingMore, size, setSize } =
        useGetNotConnected();

    if (isLoading) {
        return <Loading />;
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={"outline"}
                    className={"shrink-0 rounded-full"}
                    size={"icon"}
                >
                    <p className={"text-2xl"}>+</p>
                </Button>
            </DialogTrigger>

            <DialogContent
                className={"flex h-[30rem] flex-col justify-start gap-0"}
            >
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
                <div className="flex h-full flex-col gap-1 overflow-auto pe-1 pt-1">
                    {users?.map(
                        (user) =>
                            user && (
                                <NotConnectCard key={user.id} user={user} />
                            ),
                    )}
                    {!isReachingEnd && (
                        <Button
                            variant={"default"}
                            className={
                                "mt-2 shrink-0 animate-bounce self-center rounded-full"
                            }
                            disabled={isLoadingMore}
                            onClick={() => setSize(size + 1)}
                            size={"icon"}
                        >
                            <ArrowDown />
                        </Button>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
