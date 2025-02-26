import { useParams } from "next/navigation";
import ChooseFile from "./choose-file";
import SendMessageBox from "./send-message-box";

export default function SecondColumnFooter() {
    const { chatId } = useParams<{ chatId: string }>();

    return (
        <div className="my-3 flex items-center gap-4 px-4">
            <ChooseFile chatId={chatId.toString()} />
            <SendMessageBox chatId={chatId.toString()} />
        </div>
    );
}
