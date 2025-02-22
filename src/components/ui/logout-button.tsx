import { requests } from "@/request/requests";
import { Button } from "./button";
import { logout } from "@/actions/actions.common";

export default function LogoutButton() {
    const handleLogout = async () => {
        logout();
        localStorage.removeItem("token");
        await requests.logout();
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
