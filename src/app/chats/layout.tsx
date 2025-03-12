import FirstColumn from "@/components/app/first-column/first-column";
import { SearchProvider } from "@/context/searchContext";

export default function ChatLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SearchProvider>
            <div className={`flex h-full gap-3`}>
                <FirstColumn />
                {children}
            </div>
        </SearchProvider>
    );
}
