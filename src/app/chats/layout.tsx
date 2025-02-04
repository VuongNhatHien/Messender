import FirstColumn from "@/components/ui/first-column";

export default function ChatLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`flex h-full gap-4`}>
            <FirstColumn />
            {children}
        </div>
    );
}
