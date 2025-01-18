"use client";

import {useState} from "react";
import {Button} from "@/components/ui/button";
import {AiOutlineSearch} from "react-icons/ai";
import {Input} from "@/components/ui/input";

export default function Home() {
    const [state] = useState(true);

    return (
        <div className="flex flex-grow px-8 py-5 bg-secondary">
            <div className="2xl:container 2xl:mx-auto w-full">
                <div className={`grid w-full h-full gap-4 ${state ? "grid-cols-4" : "grid-cols-3"}`}>
                    <div className="card">
                        <div className={"header flex justify-between items-center"}>
                            <p className={"text-2xl font-bold"}>Chats</p>
                            <Button variant={"outline"} className={"rounded-full"} size={"icon"}>
                                <p className={"text-2xl"}>
                                    +
                                </p>
                            </Button>
                        </div>
                        <div className={"mt-4"}>
                            <div className="relative w-full max-w-md">
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
                    </div>
                    <div className="card col-span-2"></div>
                    {state && <div className="card"></div>}
                </div>
            </div>
        </div>
    );
}
