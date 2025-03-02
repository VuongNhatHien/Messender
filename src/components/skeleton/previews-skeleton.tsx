import { Skeleton } from "../ui/skeleton";

export default function PreviewSkeleton() {
    return (
        <div className="flex h-full flex-col gap-1 overflow-auto px-1 py-1">
            {[...Array(6)].map((_, i) => (
                <div key={i}>
                    <div className="card flex-row p-2 shadow-none border-0">
                        <Skeleton className="size-12 shrink-0 rounded-full" />
                        <div className="ml-4 w-full space-y-2">
                            <Skeleton className="h-5 w-1/2" />
                            <Skeleton className="h-5 w-full" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
