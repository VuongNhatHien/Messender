"use client";

import AddUserDialog from "./add-user-dialog";
import Searchbar from "../../ui/search";

export default function FirstColumnHeader() {
    return (
        <>
            <div className={"flex items-center justify-between px-4 py-3"}>
                <p className={"text-2xl font-bold"}>Chats</p>

                <AddUserDialog />
            </div>
            <div className={"px-3"}>
                <Searchbar />
            </div>
        </>
    );
}
