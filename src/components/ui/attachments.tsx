"use client";
import { ArrowLeft } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import AttachmentsNavBar from "./attachments-nav-bar";
import FilePage from "./third-column/files-page";
import LinkPage from "./third-column/links-page";
import MediaPage from "./third-column/media-page";

export default function Attachments({
    page,
    setPage,
}: {
    page: string;
    setPage: Dispatch<SetStateAction<string>>;
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
            <div className="mt-4 h-full w-full overflow-auto">
                {page === "media" && <MediaPage />}
                {page === "files" && <FilePage />}
                {page === "links" && <LinkPage />}
            </div>
        </>
    );
}
