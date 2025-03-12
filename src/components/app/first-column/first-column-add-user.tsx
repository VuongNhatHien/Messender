"use client";
import { Button } from "../../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../ui/dialog";
import SearchBar from "../../ui/search";
import { Separator } from "../../ui/separator";
import FirstColumnAddUserBody from "./first-column-add-user-body";
import { useSearch } from "@/hooks/useSearch";

export default function AddUserDialog() {
    const { searchNotConnected, setSearchNotConnected } = useSearch();
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
                    <SearchBar search={searchNotConnected} setSearch={setSearchNotConnected} />
                </div>

                <Separator className={"mt-4"} />
                <FirstColumnAddUserBody />
            </DialogContent>
        </Dialog>
    );
}
