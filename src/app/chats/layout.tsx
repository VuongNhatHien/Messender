import PreviewMessage from "@/components/preview-message";



export default function ChatLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-full overflow-auto bg-secondary px-5 py-5">
            <div className="h-full w-full 2xl:container 2xl:mx-auto">
                <div className={`grid h-full w-full grid-cols-4 gap-4`}>
                    <PreviewMessage />
                    {children}
                </div>
            </div>
        </div>
    );
}