import { Input } from "@/components/shadcn/input";
import { Search } from "lucide-react";

export default function Searchbar() {
    return (
        <div className="relative w-full">
            <span className="absolute bottom-0 left-0 top-0 flex items-center pl-3 text-muted-foreground">
                <Search className="h-4 w-4" />
            </span>
            <Input
                type="text"
                placeholder="Search User"
                className="rounded-full bg-accent pl-8 text-accent-foreground"
            />
        </div>
    );
}
