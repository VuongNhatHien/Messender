import { ChatType } from "@/lib/type";
import ChooseFile from "./choose-file";
import SendMessageBox from "./send-message-box";

export default function ConversationFooter({ chat }: { chat: ChatType }) {
    return (
        <div className="mb-4 flex items-center gap-4 px-4">
            <ChooseFile chatId={chat.chatId.toString()} />
            <SendMessageBox chatId={chat.chatId.toString()} />
        </div>
    );
}
