import SecondColumn from "@/components/ui/second-column";
import ThirdColumn from "@/components/ui/third-column";
import { requests } from "@/request/requests";
import { cookies } from "next/headers";

export default async function Page({
    params,
}: {
    params: Promise<{ chatId: string }>;
}) {
    const chatId = (await params).chatId;
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const resMessages = await requests.getChat(chatId, token!);
    const resUser = await requests.getUserFromChat(chatId, token!);
    console.log("resMessages: ", resMessages);
    console.log("resUser: ", resUser);
    const chat = {
        id: chatId,
        messages: resMessages.data,
        user: resUser.data,
    };
    // const chat = FindChatById(chatId);
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
