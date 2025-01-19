"use client";

import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Search} from "lucide-react"
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import Searchbar from "@/components/search";

const previewMessage = [
    {
        id: 1,
        name: "Alice Johnson",
        avatar: "/avatar.png",
        message: "Hi there! What's new?",
        email: "alice.johnson@example.com",
    },
    {
        id: 2,
        name: "Bob Smith",
        avatar: "/avatar.png",
        message: "Did you finish the report?",
        email: "bob.smith@example.com",
    },
    {
        id: 3,
        name: "Charlie Brown",
        avatar: "/avatar.png",
        message: "Let's catch up soon!",
        email: "charlie.brown@example.com",
    },
    {
        id: 4,
        name: "Diana Prince",
        avatar: "/avatar.png",
        message: "Great job on the presentation!",
        email: "diana.prince@example.com",
    },
    {
        id: 5,
        name: "Ethan Hunt",
        avatar: "/avatar.png",
        message: "Can we reschedule the meeting? I just realized I have another appointment at the same time, and it might overlap. Let me know what works best for you!",
        email: "ethan.hunt@example.com",
    },
    {
        id: 6,
        name: "Fiona Gallagher",
        avatar: "/avatar.png",
        message: "I'll send over the details shortly.",
        email: "fiona.gallagher@example.com",
    },
    {
        id: 7,
        name: "George Wilson",
        avatar: "/avatar.png",
        message: "Don't forget about the deadline.",
        email: "george.wilson@example.com",
    },
    {
        id: 8,
        name: "Hannah Montana",
        avatar: "/avatar.png",
        message: "Looking forward to our call! By the way, I wanted to mention that I found some really interesting articles related to our discussion topic. I think you'll find them useful, so I'll share the links during the call.",
        email: "hannah.montana@example.com",
    },
    {
        id: 9,
        name: "Ian Wright",
        avatar: "/avatar.png",
        message: "Can you share the document?",
        email: "ian.wright@example.com",
    },
    {
        id: 10,
        name: "Jessica Alba",
        avatar: "/avatar.png",
        message: "Thanks for your help earlier!",
        email: "jessica.alba@example.com",
    },
    {
        id: 11,
        name: "Kevin Durant",
        avatar: "/avatar.png",
        message: "How's the project coming along?",
        email: "kevin.durant@example.com",
    },
    {
        id: 12,
        name: "Laura Palmer",
        avatar: "/avatar.png",
        message: "Let's discuss this tomorrow.",
        email: "laura.palmer@example.com",
    },
    {
        id: 13,
        name: "Michael Scott",
        avatar: "/avatar.png",
        message: "That's what she said!",
        email: "michael.scott@example.com",
    },
    {
        id: 14,
        name: "Nina Dobrev",
        avatar: "/avatar.png",
        message: "I'll see you at the event. By the way, do you think we should prepare some additional materials to make sure everything goes smoothly? I was thinking of adding a few backup slides just in case.",
        email: "nina.dobrev@example.com",
    },
];


export default function Home() {
    const [state] = useState(false);

    return (
        <div className="h-full px-8 py-5 bg-secondary overflow-auto">
            <div className="2xl:container 2xl:mx-auto w-full h-full">
                <div className={`grid w-full h-full gap-4 ${state ? "grid-cols-4" : "grid-cols-3"}`}>
                    <div className="card">
                        <div className={"header flex justify-between items-center"}>
                            <p className={"text-2xl font-bold"}>Chats</p>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant={"secondary"}
                                            className={"rounded-full"}
                                            size={"icon"}>
                                        <p className={"text-2xl"}>
                                            +
                                        </p>
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className={"h-[30rem]"}>
                                    <DialogHeader>
                                        <DialogTitle>New message</DialogTitle>
                                        <DialogDescription>
                                            Start a new conversation with someone
                                        </DialogDescription>
                                    </DialogHeader>

                                    <Searchbar/>

                                    <div className="pt-2 border-t h-full overflow-auto pr-2">
                                        {previewMessage.map((message) => (
                                            <Link key={message.id}
                                                  className="card-link"
                                                  href={"/"}>
                                                <img src={message.avatar} alt={message.name}
                                                     className="h-10 w-10 rounded-full"/>
                                                <div className="ml-4">
                                                    <p className="font-semibold">{message.name}</p>
                                                    <p className="text-muted-foreground">
                                                        {message.email}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </DialogContent>
                            </Dialog>


                        </div>
                        <div className={"mt-4"}>
                            <Searchbar/>
                        </div>

                        <div className="mt-4 pt-2 border-t h-full overflow-auto pl-1 pr-2">
                            {previewMessage.map((message) => (
                                <Link key={message.id}
                                      className="card-link"
                                      href={"/"}>
                                    <img src={message.avatar} alt={message.name}
                                         className="h-10 w-10 rounded-full"/>
                                    <div className="ml-4">
                                        <p className="font-semibold">{message.name}</p>
                                        <p className="text-muted-foreground">
                                            {message.message.length > 32
                                                ? `${message.message.slice(0, 32)}...`
                                                : message.message}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="card col-span-2">

                    </div>
                    {state && <div className="card"></div>}
                </div>
            </div>
        </div>

    );
}
