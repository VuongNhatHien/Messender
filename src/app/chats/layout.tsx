import FirstColumn from "@/components/app/first-column/first-column";

export default function ChatLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`flex h-full gap-3`}>
            <FirstColumn />
            {children}
        </div>
    );
}
