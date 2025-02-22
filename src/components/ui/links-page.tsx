import { MetadataType } from "@/types/schema.type";
import { FindLinksInChat } from "@/mocks/mock";
import Image from "next/image";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { requests } from "@/request/requests";

const LinkItem = ({ link }: { link: MetadataType | null }) => {
    return (
        <a
            href={link?.url}
            target="_blank"
            className="hover-custom flex items-center gap-3 rounded-sm py-1 pe-2"
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

export default function LinkPage({ chatId }: { chatId: string }) {
    const [links, setLinks] = useState<MetadataType[]>([]);
    useEffect(() => {
        const fetchRequest = async () => {
            try {
                const result = await requests.getLinks(chatId);
                setLinks(result.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchRequest();
    }, []);
    return (
        <div className="space-y-1">
            {links.map((link) => (
                <LinkItem key={link?.id} link={link} />
            ))}
        </div>
    );
}
