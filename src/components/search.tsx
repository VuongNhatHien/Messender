import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="relative w-full">
      <span className="absolute top-0 bottom-0 left-0 flex items-center pl-3 text-muted-foreground">
        <Search className="h-4 w-4" />
      </span>
      <Input
        type="text"
        placeholder="Search User"
        className="pl-8 bg-accent text-accent-foreground rounded-full"
      />
    </div>
  );
}
