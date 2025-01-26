"use client"
import { redirect } from "next/navigation";
import { Button } from "./button";

export default function LogoutButton() {
    return (
        <div>
            <Button
                variant="ghost"
                className={"text-base font-semibold"}
                onClick={() => {
                    redirect("/auth/register");
                }}
            >
                Logout
            </Button>
        </div>
    );
}