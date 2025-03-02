import { Skeleton } from "../ui/skeleton";

export default function ThirdColumnInfoHeaderSkeleton() {
    return (
        <>
            <Skeleton className="size-20 rounded-full" />
            <Skeleton className="mt-2 h-5 w-1/3" />
        </>
    );
}
