"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function NotFound() {
    const router = useRouter();
    return (
        <div className="flex h-full flex-col items-center justify-center gap-4">
            <Image src="/logo.png" width={120} height={120} alt="Logo" />
            <div className="text-4xl">{`This page isn't available`}</div>
            <div className="text-lg text-muted-foreground">
                The link you followed may be broken, or the page may have been
                removed
            </div>
            <Button
                variant="default"
                className="rounded-full"
                onClick={() => {
                    router.push("/");
                }}
            >
                Go back to home
            </Button>
        </div>
    );
}
