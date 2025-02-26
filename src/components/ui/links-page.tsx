"use client";
import Loading from "@/app/loading";
import fetcher from "@/lib/fetcher";
import { ChatType } from "@/types/response.type";
import { AttachmentType, MetadataType } from "@/types/schema.type";
import { Globe } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import useSWR from "swr";

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

    const { data: links } = useSWR<MetadataType[]>(
        `http://localhost:8080/chats/${chatId}/links`,
        fetcher,
    );
    if (!links) {
        return <Loading />;
    }
    return (
        <div className="space-y-1">
            {links.map((link) => (
                <LinkItem key={link.id} link={link} />
            ))}
        </div>
    );
}
