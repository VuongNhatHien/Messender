"use client";

import FilePage from "./third-column-files";
import LinkPage from "./third-column-links";
import MediaPage from "./third-column-media";

export default function ThirdColumnAttachmentsBody({ page }: { page: string }) {
    return (
        <div className="mt-4 h-full w-full overflow-auto">
            {page === "media" && <MediaPage />}
            {page === "files" && <FilePage />}
            {page === "links" && <LinkPage />}
        </div>
    );
}
