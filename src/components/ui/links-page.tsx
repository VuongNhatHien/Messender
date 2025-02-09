import { MetadataType } from "@/lib/type";
import { FindLinksInChat } from "@/mocks/mock";
import Image from "next/image";
import { Globe } from "lucide-react";

const LinkItem = ({ link }: { link: MetadataType | null }) => {
    return (
        <a
            href={link?.url}
            target="_blank"
            className="hover-custom flex items-center gap-3 rounded-sm pe-2 py-1"
        >
            <div className="flex shrink-0 size-[52px] items-center justify-center rounded-xl bg-muted">
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

export default function LinkPage({ chatId }: { chatId: string }) {
    const links = FindLinksInChat(chatId);
    return (
        <div className="space-y-1">
            {links.map((link) => (
                <LinkItem key={link?.metadataId} link={link} />
            ))}
        </div>
    );
}
