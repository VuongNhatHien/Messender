"use client";

import { Dispatch, SetStateAction } from "react";
import ThirdColumnInfoHeader from "./third-column-info-header";
import ThirdColumnInfoBody from "./third-column-info-body";

export default function ThirdColumnInfo({
    setPage,
}: {
    setPage: Dispatch<SetStateAction<string>>;
}) {
    return (
        <>
            <ThirdColumnInfoHeader />
            <ThirdColumnInfoBody setPage={setPage} />
        </>
    );
}
