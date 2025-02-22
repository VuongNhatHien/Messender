import SecondColumn from "@/components/ui/second-column";
import ThirdColumn from "@/components/ui/third-column";
import { FindChatById } from "@/mocks/mock";

export default async function Page({
    params,
}: {
    params: Promise<{ chatId: string }>;
}) {
    const chatId = (await params).chatId;
    const chat = FindChatById(chatId);
    if (!chat) {
        return (
            <div className="card flex items-center justify-center">
                <p className={"text-2xl font-bold"}>No chats selected</p>
            </div>
        );
    }

    return (
        <>
            <SecondColumn chat={chat} />
            <ThirdColumn chat={chat} />
        </>
    );
}
