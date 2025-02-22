import Searchbar from "@/components/ui/search";
import { Separator } from "@/components/ui/separator";
// import { previews } from "@/mocks/mock";
import AddUserDialog from "./add-user-dialog";
import PreviewCard from "./preview-card";
import { requests } from "@/request/requests";
import { cookies } from "next/headers";

export default async function FirstColumn() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const res = await requests.getPreviews(token!);
    const previews = res.data;
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
