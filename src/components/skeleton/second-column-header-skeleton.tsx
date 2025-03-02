import { Skeleton } from "../ui/skeleton";

export default function SecondColumnHeaderSkeleton() {
    return (
        <div className={"flex items-center px-4 py-3 gap-4"}>
            <Skeleton className="size-10 shrink-0 rounded-full" />
            <Skeleton className="h-6 w-[7rem]" />
        </div>
    );
}
