import PreviewMessage from "@/app/chats/preview-message";

export default function ChatLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`grid h-full w-full grid-cols-4 gap-4`}>
            <PreviewMessage />
            {children}
        </div>
    );
}
