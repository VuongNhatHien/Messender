"use client";

import Loading from "@/app/loading";
import { useGetNotConnected } from "@/hooks/hooks";
import NotConnectCard from "./not-connect-card";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function FirstColumnAddUserBody() {
    const { users, isLoading, isReachingEnd, isLoadingMore, size, setSize } =
        useGetNotConnected();

    if (isLoading) {
        return <Loading />;
    }
    return (
        <div className="flex h-full flex-col gap-1 overflow-auto pe-1 pt-1">
            {users?.map(
                (user) => user && <NotConnectCard key={user.id} user={user} />,
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
