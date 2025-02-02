import { ChatType } from "@/lib/type";

export default function ConversationBody({ chat }: { chat: ChatType }) {
    return (
        <div className="flex h-full flex-col-reverse justify-start gap-4 overflow-auto p-4">
            {chat.messages
                .slice()
                .reverse()
                .map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${
                            message.sender.userId === chat.user.userId
                                ? "justify-start"
                                : "justify-end"
                        }`}
                    >
                        <div
                            className={`max-w-[75%] rounded-3xl px-3 py-2 ${
                                message.sender.userId === chat.user.userId
                                    ? "bg-secondary text-secondary-foreground"
                                    : "bg-primary text-primary-foreground"
                            }`}
                        >
                            <p>{message.message}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
}
