"use client";

import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./logout-button";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const path = usePathname();
    return (
        <header className="border-b shadow-md">
            <nav className="container-custom flex items-center justify-between py-2">
                <Link href="/" className="flex items-center">
                    <Image src="/logo.png" alt="Logo" width={30} height={30} />
                </Link>
                <div className="flex items-center">
                    {path !== "/auth/login" && path !== "/auth/register" && (
                        <LogoutButton />
                    )}
                    <ModeToggle />
                </div>
            </nav>
        </header>
    );
}
