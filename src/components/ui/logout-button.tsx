import { Button } from "./button";
import { logout } from "@/actions/common";

export default function LogoutButton() {
    return (
        <div>
            <Button
                variant="ghost"
                className={"text-base font-semibold"}
                onClick={() => {
                    logout();
                }}
            >
                Logout
            </Button>
        </div>
    );
}
