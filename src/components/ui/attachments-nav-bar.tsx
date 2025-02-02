import { Dispatch, SetStateAction } from "react";

const navItems = [
    {
        name: "Media",
        value: "media",
    },
    {
        name: "Files",
        value: "files",
    },
    {
        name: "Links",
        value: "links",
    },
];

export default function AttachmentsNavBar({
    page,
    setPage,
}: {
    page: string;
    setPage: Dispatch<SetStateAction<string>>;
}) {
    return (
        <div className="flex w-full items-center justify-between rounded-full border shadow-sm">
            {navItems.map((navItem, index) => (
                <button
                    key={index}
                    className={`hover-custom basis-1/${navItems.length} rounded-full p-1 ${page === navItem.value ? "border bg-accent" : "text-accent-foreground"}`}
                    onClick={() => setPage(navItem.value)}
                >
                    <p className="font-semibold">{navItem.name}</p>
                </button>
            ))}
        </div>
    );
}
