import { ArrowLeft, File, Image, Link as LinkLucide } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function FilePage({
    setPage,
}: {
    setPage: Dispatch<SetStateAction<string>>;
}) {
    return (
        <div className="flex w-full items-center gap-2">
            <button
                className="hover-custom rounded-full p-1"
                onClick={() => setPage("default")}
            >
                <ArrowLeft size={24} />
            </button>
            <p className="text-xl font-semibold">Files</p>
        </div>
    );
}
