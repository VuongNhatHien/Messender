import FirstColumn from "@/components/ui/first-column";

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