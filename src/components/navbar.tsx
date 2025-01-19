import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="py-2 px-8 border-b shadow-md">
      <nav className="2xl:container 2xl:mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png" // Replace with the actual path to your logo
            alt="Logo"
            className="h-7 w-auto" // Adjust height and width as needed
          />
        </Link>
        <div className="flex gap-2 items-center">
          <Button variant="ghost" className={"font-semibold"}>
            Logout
          </Button>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
