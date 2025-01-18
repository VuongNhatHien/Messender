"use client";

import {useState} from "react";
import {Button} from "@/components/ui/button";

export default function Home() {
    const [state] = useState(true);

    return (
        <div className="flex flex-grow px-8 py-5 bg-secondary">
            <div className="2xl:container 2xl:mx-auto w-full">
                <div className={`grid w-full h-full gap-4 ${state ? "grid-cols-4" : "grid-cols-3"}`}>
                    <div className="card">
                        <div className={"flex justify-between items-center"}>
                            <p className={"text-xl font-bold"}>Chats</p>
                            <Button variant={"outline"} className={"rounded-full"} size={"icon"}>
                                <p className={"text-2xl"}>
                                    +
                                </p>
                            </Button>
                        </div>
                    </div>
                    <div className="card col-span-2"></div>
                    {state && <div className="card"></div>}
                </div>
            </div>
        </div>
    );
}
