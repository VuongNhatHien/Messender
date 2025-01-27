"use client"
import { useRouter } from "next/navigation";
import { Button } from "./button";

export default function LogoutButton() {
    const router = useRouter()
    return (
        <div>
            <Button
                variant="ghost"
                className={"text-base font-semibold"}
                onClick={() => {
                    router.push("/auth/login");
                }}
            >
                Logout
            </Button>
        </div>
    );
}