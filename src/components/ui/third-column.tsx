"use client";

import { ChatType } from "@/lib/type";
import { ArrowLeft, File, Image, Link as LinkLucide } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarImage } from "./avatar";
import MediaPage from "./media-page";
import FilePage from "./files-page";
import LinkPage from "./links-page";

export default function ThirdColumn({ chat }: { chat: ChatType }) {
    const [page, setPage] = useState("default");

    return (
        <div className="card col-span-1">
            <div className="flex flex-col items-center px-2 pt-4">
                {page === "media" ? (
                    <MediaPage setPage={setPage} />
                ) : page === "files" ? (
                    <FilePage setPage={setPage} />
                ) : page === "links" ? (
                    <LinkPage setPage={setPage} />
                ) : (
                    <>
                        <Avatar className="size-20">
                            <AvatarImage src={chat.user.avatar} />
                        </Avatar>
                        <div className="mt-2 text-center">
                            <p className="text-xl font-semibold">
                                {chat.user.name}
                            </p>
                        </div>
                        <div className="mt-4 w-full">
                            <button
                                className="card-link gap-2 py-3"
                                onClick={() => setPage("media")}
                            >
                                <Image />
                                <p className="font-semibold">Media</p>
                            </button>

                            <button
                                className="card-link gap-2 py-3"
                                onClick={() => setPage("files")}
                            >
                                <File />
                                <p className="font-semibold">Files</p>
                            </button>

                            <button
                                className="card-link gap-2 py-3"
                                onClick={() => setPage("links")}
                            >
                                <LinkLucide />
                                <p className="font-semibold">Links</p>
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
