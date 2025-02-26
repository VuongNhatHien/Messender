"use client";

import socket from "@/lib/socket";
import { requests } from "@/request/requests";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { mutate } from "swr";

export default function Page() {
    return (
        <div className="card flex w-3/4 items-center justify-center">
            <p className={"text-2xl font-bold"}>No chats selected</p>
        </div>
    );
}
