"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type SearchContextType = {
    searchNotConnected: string;
    setSearchNotConnected: Dispatch<SetStateAction<string>>;
    searchPreviews: string;
    setSearchPreviews: Dispatch<SetStateAction<string>>;
};

export const SearchContext = createContext<SearchContextType | undefined>(
    undefined,
);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const [searchNotConnected, setSearchNotConnected] = useState("");
    const [searchPreviews, setSearchPreviews] = useState("");

    return (
        <SearchContext.Provider
            value={{
                searchNotConnected,
                setSearchNotConnected,
                searchPreviews,
                setSearchPreviews,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};
