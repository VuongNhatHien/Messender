import { ModeToggle } from "@/components/shadcn/mode-toggle";
import { Button } from "@/components/shadcn/button";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="border-b px-5 py-2 shadow-md">
            <nav className="flex items-center justify-between 2xl:container 2xl:mx-auto">
                <Link href="/" className="flex items-center">
                    <Image src="/logo.png" alt="Logo" width={30} height={30} />
                </Link>
                <div className="flex items-center">
                    <Button
                        variant="ghost"
                        className={"text-base font-semibold"}
                    >
                        Logout
                    </Button>
                    <ModeToggle />
                </div>
            </nav>
        </header>
    );
}
