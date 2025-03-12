"use client";

import AddUserDialog from "./first-column-add-user";
import SearchBar from "../../ui/search";
import { useSearch } from "@/hooks/useSearch";

export default function FirstColumnHeader() {
    const { searchPreviews, setSearchPreviews } = useSearch();
    return (
        <>
            <div className={"flex items-center justify-between px-4 py-3"}>
                <p className={"text-2xl font-bold"}>Chats</p>

                <AddUserDialog />
            </div>
            <div className={"px-3"}>
                <SearchBar
                    search={searchPreviews}
                    setSearch={setSearchPreviews}
                />
            </div>
        </>
    );
}
