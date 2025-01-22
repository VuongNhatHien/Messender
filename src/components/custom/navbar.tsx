import { ModeToggle } from "@/components/shadcn/mode-toggle";
import { Button } from "@/components/shadcn/button";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-b px-5 py-2 shadow-md">
            <nav className="flex items-center justify-between 2xl:container 2xl:mx-auto">
                <Link href="/" className="flex items-center">
                    <img
                        src="/logo.png" // Replace with the actual path to your logo
                        alt="Logo"
                        className="h-7 w-auto" // Adjust height and width as needed
                    />
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
