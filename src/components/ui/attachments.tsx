"use client"
import { ArrowLeft } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import AttachmentsNavBar from "./attachments-nav-bar";
import FilePage from "./files-page";
import LinkPage from "./links-page";
import MediaPage from "./media-page";
import { ChatType } from "@/types/response.type";

export default function Attachments({
    page,
    setPage,
    chat
}: {
    page: string;
    setPage: Dispatch<SetStateAction<string>>;
    chat: ChatType;
}) {
    return (
        <>
            <div className="flex w-full items-center gap-2">
                <button
                    className="hover-custom rounded-full p-1"
                    onClick={() => setPage("default")}
                >
                    <ArrowLeft size={24} />
                </button>
                <p className="text-lg font-bold">Media, files, links</p>
            </div>
            <div className="mt-3 w-full">
                <AttachmentsNavBar page={page} setPage={setPage} />
            </div>
            <div className="mt-4 w-full h-full overflow-auto">
                {page === "media" && <MediaPage chat={chat}/>}
                {page === "files" && <FilePage chat={chat}/>}
                {page === "links" && <LinkPage chat={chat}/>}
            </div>
        </>
    );
}
