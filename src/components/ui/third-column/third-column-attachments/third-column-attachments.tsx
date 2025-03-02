"use client";
import { Dispatch, SetStateAction } from "react";
import ThirdColumnAttachmentsBody from "./third-column-attachments-body";
import AttachmentsHeader from "./third-column-attachments-header";
import AttachmentsNavBar from "./third-column-attachments-navbar";

export default function Attachments({
    page,
    setPage,
}: {
    page: string;
    setPage: Dispatch<SetStateAction<string>>;
}) {
    return (
        <>
            <AttachmentsHeader setPage={setPage} />
            <AttachmentsNavBar page={page} setPage={setPage} />
            <ThirdColumnAttachmentsBody page={page} />
        </>
    );
}
