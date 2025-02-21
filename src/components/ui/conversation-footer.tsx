import { ChatType } from "@/types/schema-type";
import ChooseFile from "./choose-file";
import SendMessageBox from "./send-message-box";

export default function ConversationFooter({ chat }: { chat: ChatType }) {
    return (
        <div className="my-3 flex items-center gap-4 px-4">
            <ChooseFile chatId={chat.chatId.toString()} />
            <SendMessageBox chatId={chat.chatId.toString()} />
        </div>
    );
}
