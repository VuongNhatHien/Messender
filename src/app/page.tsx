"use client";

import {useState} from "react";
import {Button} from "@/components/ui/button";
import {AiOutlineSearch} from "react-icons/ai";
import {Input} from "@/components/ui/input";

const previewMessage = [
    {
        id: 1,
        name: "Alice Johnson",
        avatar: "/avatar.png",
        message: "Hi there! What's new?",
    },
    {
        id: 2,
        name: "Bob Smith",
        avatar: "/avatar.png",
        message: "Did you finish the report?",
    },
    {
        id: 3,
        name: "Charlie Brown",
        avatar: "/avatar.png",
        message: "Let's catch up soon!",
    },
    {
        id: 4,
        name: "Diana Prince",
        avatar: "/avatar.png",
        message: "Great job on the presentation!",
    },
    {
        id: 5,
        name: "Ethan Hunt",
        avatar: "/avatar.png",
        message: "Can we reschedule the meeting? I just realized I have another appointment at the same time, and it might overlap. Let me know what works best for you!",
    },
    {
        id: 6,
        name: "Fiona Gallagher",
        avatar: "/avatar.png",
        message: "I'll send over the details shortly.",
    },
    {
        id: 7,
        name: "George Wilson",
        avatar: "/avatar.png",
        message: "Don't forget about the deadline.",
    },
    {
        id: 8,
        name: "Hannah Montana",
        avatar: "/avatar.png",
        message: "Looking forward to our call! By the way, I wanted to mention that I found some really interesting articles related to our discussion topic. I think you'll find them useful, so I'll share the links during the call.",
    },
    {
        id: 9,
        name: "Ian Wright",
        avatar: "/avatar.png",
        message: "Can you share the document?",
    },
    {
        id: 10,
        name: "Jessica Alba",
        avatar: "/avatar.png",
        message: "Thanks for your help earlier!",
    },
    {
        id: 11,
        name: "Kevin Durant",
        avatar: "/avatar.png",
        message: "How's the project coming along?",
    },
    {
        id: 12,
        name: "Laura Palmer",
        avatar: "/avatar.png",
        message: "Let's discuss this tomorrow.",
    },
    {
        id: 13,
        name: "Michael Scott",
        avatar: "/avatar.png",
        message: "That's what she said!",
    },
    {
        id: 14,
        name: "Nina Dobrev",
        avatar: "/avatar.png",
        message: "I'll see you at the event. By the way, do you think we should prepare some additional materials to make sure everything goes smoothly? I was thinking of adding a few backup slides just in case.",
    },
];


export default function Home() {
    const [state] = useState(true);

    return (
        <div className="h-full px-8 py-5 bg-secondary overflow-auto">
            <div className="2xl:container 2xl:mx-auto w-full h-full">
                <div className={`grid w-full h-full gap-4 ${state ? "grid-cols-4" : "grid-cols-3"}`}>
                    <div className="card">
                        <div className={"header flex justify-between items-center"}>
                            <p className={"text-2xl font-bold"}>Chats</p>
                            <Button variant={"secondary"}
                                    className={"rounded-full"}
                                    size={"icon"}>
                                <p className={"text-2xl"}>
                                    +
                                </p>
                            </Button>
                        </div>
                        <div className={"search mt-4"}>
                            <div className="relative w-full">
                                <span
                                    className="absolute top-0 bottom-0 left-0 flex items-center pl-3 text-muted-foreground">
                                    <AiOutlineSearch className="h-4 w-4"/>
                                </span>
                                <Input
                                    type="text"
                                    placeholder="Search User"
                                    className="pl-8 bg-accent text-accent-foreground rounded-full"
                                />
                            </div>
                        </div>

                        <div className="mt-4 border-t h-full overflow-auto">
                            {previewMessage.map((message) => (
                                <div key={message.id} className="flex items-center gap-3 mt-4">
                                    <img src={message.avatar} alt={message.name}
                                         className="h-10 w-10 rounded-full"/>
                                    <div>
                                        <p className="font-semibold">{message.name}</p>
                                        <p className="text-muted-foreground">
                                            {message.message.length > 20
                                                ? `${message.message.slice(0, 20)}...`
                                                : message.message}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="card col-span-2"></div>
                    {state && <div className="card"></div>}
                </div>
            </div>
        </div>

    );
}
