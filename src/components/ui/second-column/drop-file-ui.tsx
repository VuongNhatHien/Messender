"use client";

import { FolderUp } from "lucide-react";

export default function DropFileUI() {
    return (
        <div className="absolute inset-0 flex h-full flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-foreground bg-background opacity-85">
            <p className="text-2xl font-bold text-secondary-foreground">
                Drop files here
            </p>
            <FolderUp size={48} />
        </div>
    );
}
