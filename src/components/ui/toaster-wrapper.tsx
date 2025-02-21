"use client";

import { Toaster } from "sonner";
import { useTheme } from "next-themes";

function ToasterWrapper() {
    const { theme } = useTheme();

    return <Toaster theme={theme as "light" | "dark" | "system"} />;
}

export default ToasterWrapper;