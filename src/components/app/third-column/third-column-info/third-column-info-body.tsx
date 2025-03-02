"use client";
import { File, Image as ImageLucide, Link as LinkLucide } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

const attachmentCards = [
    {
        name: "Media",
        icon: <ImageLucide />,
    },
    {
        name: "Files",
        icon: <File />,
    },
    {
        name: "Links",
        icon: <LinkLucide />,
    },
];

export default function ThirdColumnInfoBody({
    setPage,
}: {
    setPage: Dispatch<SetStateAction<string>>;
}) {
    return (
        <div className="mt-4 w-full">
            {attachmentCards.map((attachment, index) => (
                <button
                    key={index}
                    className="card-link gap-2 py-3"
                    onClick={() => setPage(attachment.name.toLowerCase())}
                >
                    {attachment.icon}
                    <p className="font-semibold">{attachment.name}</p>
                </button>
            ))}
        </div>
    );
}
