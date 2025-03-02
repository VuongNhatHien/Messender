"use client";

import { useGetNotConnected, useGetPreviews } from "@/hooks/hooks";
import PreviewCard from "../preview-card";
import { Button } from "../button";
import { ArrowDown } from "lucide-react";
import Loading from "@/app/loading";
import { Skeleton } from "../skeleton";

export default function FirstColumnBody() {
    const { previews, isLoading, isReachingEnd, isLoadingMore, size, setSize } =
        useGetPreviews();

    if (isLoading) {
        return <Loading />;
    }
    return (
        <>
            {previews?.map(
                (preview) =>
                    preview && (
                        <PreviewCard key={preview.chatId} preview={preview} />
                    ),
            )}
            {!isReachingEnd && (
                <Button
                    variant={"default"}
                    className={
                        "mt-2 shrink-0 animate-bounce self-center rounded-full"
                    }
                    disabled={isLoadingMore}
                    onClick={() => setSize(size + 1)}
                    size={"icon"}
                >
                    <ArrowDown />
                </Button>
            )}
        </>
    );
}
