import { ChatType } from "@/types/response.type";
import ChooseFile from "./choose-file";
import SendMessageBox from "./send-message-box";

export default function SecondColumnFooter({ chat }: { chat: ChatType }) {
    return (
        <div className="my-3 flex items-center gap-4 px-4">
            <ChooseFile chatId={chat.id.toString()} />
            <SendMessageBox chatId={chat.id.toString()} />
        </div>
    );
}
