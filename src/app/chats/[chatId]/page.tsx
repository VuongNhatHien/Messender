import SecondColumn from "@/components/ui/second-column";
import ThirdColumn from "@/components/ui/third-column";
import { requests } from "@/request/requests";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
    const chat = {
        id: chatId,
        messages: resMessages.data,
        user: resUser.data,
    };
    if (!chat.messages) {
        redirect("/chats");
    }

    return (
        <>
            <SecondColumn chat={chat} />
            <ThirdColumn chat={chat} />
        </>
    );
}
