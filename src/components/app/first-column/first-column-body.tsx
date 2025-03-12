"use client";

import PreviewSkeleton from "@/components/skeleton/previews-skeleton";
import { useGetPreviews } from "@/hooks/hooks";
import { ArrowDown } from "lucide-react";
import { Button } from "../../ui/button";
import PreviewCard from "./preview-card";
import { useSearch } from "@/hooks/useSearch";

export default function FirstColumnBody() {
    const { searchPreviews } = useSearch();
    const { previews, isLoading, isReachingEnd, isLoadingMore, size, setSize } =
        useGetPreviews(searchPreviews);

    if (isLoading) {
        return <PreviewSkeleton />;
    }
    return (
        <div className="flex h-full flex-col gap-1 overflow-auto px-1 py-1">
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
        </div>
    );
}
