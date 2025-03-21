import { SearchContext } from "@/context/searchContext";
import { useContext } from "react";

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error("useSearch must be used within a SearchProvider");
    }
    return context;
};
