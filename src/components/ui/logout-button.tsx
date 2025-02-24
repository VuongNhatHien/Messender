import { requests } from "@/request/requests";
import { Button } from "./button";

export default function LogoutButton() {
    const handleLogout = async () => {
        localStorage.removeItem("token");
        await requests.logout();
        window.location.reload();
    };
    return (
        <div>
            <Button
                variant="ghost"
                className={"text-base font-semibold"}
                onClick={handleLogout}
            >
                Logout
            </Button>
        </div>
    );
}
