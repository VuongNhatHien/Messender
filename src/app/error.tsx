"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex h-full flex-col items-center justify-center gap-4">
            <Image src="/logo.png" width={120} height={120} alt="Logo" />
            <div className="text-4xl">{`Sorry, something went wrong`}</div>
            <div className="text-lg text-muted-foreground">
                {`We're working on getting this fixed as soon as we can`}
            </div>
            <Button
                variant="default"
                className="rounded-full"
                onClick={() => {
                    console.log("Reset");
                    reset();
                }}
            >
                Try again
            </Button>
        </div>
    );
}
