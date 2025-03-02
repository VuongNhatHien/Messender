"use client";

import DropFileUI from "./drop-file-ui";
import SecondColumnBody from "./second-column-body";
import SecondColumnFooter from "./second-column-footer";

export default function SecondColumnBodyAndFooter({
    isOver,
}: Readonly<{ isOver: boolean }>) {
    return (
        <div className="relative flex h-full flex-col overflow-hidden">
            <SecondColumnBody />
            <SecondColumnFooter />
            {isOver && <DropFileUI />}
        </div>
    );
}
