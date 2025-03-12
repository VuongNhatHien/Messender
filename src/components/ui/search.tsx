import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function SearchbarNotConnected({
    search,
    setSearch,
}: {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
}) {
    return (
        <div className="relative w-full">
            <span className="absolute bottom-0 left-0 top-0 flex items-center pl-3 text-muted-foreground">
                <Search className="h-4 w-4" />
            </span>
            <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search User"
                className="rounded-full bg-accent pl-8 text-accent-foreground"
            />
        </div>
    );
}
