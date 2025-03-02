"use client";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useGetLinks } from "@/hooks/hooks";
import { MetadataType } from "@/types/schema.type";
import { ArrowDown, Globe } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "../../../ui/button";

const LinkItem = ({ link }: { link: MetadataType | null }) => {
    return (
        <a
            href={link?.url}
            target="_blank"
            className="hover-custom flex items-center gap-3 rounded-sm px-1 py-1"
        >
            <div className="flex size-[52px] shrink-0 items-center justify-center rounded-xl bg-muted">
                {link?.image ? (
                    <Image
                        src={link.image}
                        width={128}
                        height={128}
                        alt=""
                        className="h-full w-full rounded-xl object-cover"
                    />
                ) : (
                    <Globe size={32} className="text-muted-foreground" />
                )}
            </div>
            <p className="truncate font-bold">
                {link?.title ? link.title : link?.url}
            </p>
        </a>
    );
};

export default function LinkPage() {
    const { chatId } = useParams<{ chatId: string }>();

    const { links, isLoading, isReachingEnd, isLoadingMore, size, setSize } =
        useGetLinks(chatId);
    if (isLoading)
        return (
            <div className="flex h-full items-center justify-center">
                <LoadingSpinner className="size-10" />
            </div>
        );
    return (
        <div className="flex flex-col gap-1">
            {links?.map(
                (link) => link && <LinkItem key={link.id} link={link} />,
            )}
            {!isReachingEnd && (
                <Button
                    variant={"default"}
                    className={
                        "mt-3 shrink-0 animate-bounce self-center rounded-full"
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
