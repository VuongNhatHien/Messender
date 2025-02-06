import Searchbar from "@/components/ui/search";
import { Separator } from "@/components/ui/separator";
import { previews } from "@/mocks/mock";
import AddUserDialog from "./add-user-dialog";
import PreviewCard from "./preview-card";

export default function FirstColumn() {
    return (
        <div className="card w-1/4">
            <div
                className={"header flex items-center justify-between px-4 py-3"}
            >
                <p className={"text-2xl font-bold"}>Chats</p>

                <AddUserDialog />
            </div>
            <div className={"px-3"}>
                <Searchbar />
            </div>

            <Separator className={"mt-4"} />
            <div className="h-full space-y-1 overflow-auto px-1 py-1">
                {previews.map((preview) => (
                    <PreviewCard key={preview.chatId} preview={preview} />
                ))}
            </div>
        </div>
    );
}
