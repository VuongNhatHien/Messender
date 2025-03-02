"use client";

import { useState } from "react";
import Attachments from "./third-column-attachments/third-column-attachments";
import ThirdColumnInfo from "./third-column-info/third-column-info";

export default function ThirdColumn() {
    const [page, setPage] = useState("default");

    return (
        <div className="card w-1/4 items-center overflow-auto px-3 py-4">
            {page === "default" ? (
                <ThirdColumnInfo setPage={setPage} />
            ) : (
                <Attachments page={page} setPage={setPage} />
            )}
        </div>
    );
}
