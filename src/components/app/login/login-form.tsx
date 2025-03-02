"use client";

import { login } from "@/actions/actions.common";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import FormErrorMessage from "../../ui/form-error-message";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { requests } from "@/lib/requests";

export default function LoginForm() {
    const [state, action, pending] = useActionState(login, undefined);
    const router = useRouter();
    useEffect(() => {
        const handleLoginSuccess = async () => {
            //set cookie (later server side will automatically get token from client, so this must be implmented in client side)
            if (state?.code === "SUCCESS") {
                await requests.auth({
                    token: state.token,
                    expiresIn: state.expiresIn,
                });
                localStorage.setItem("token", state.token);
                window.location.reload();
            }
        };

        handleLoginSuccess();
    }, [state, router]);

    return (
        <form
            className="card w-80 items-center justify-center space-y-4 p-4"
            action={action}
        >
            <p className="text-2xl font-semibold">Sign in</p>
            <div className="w-full space-y-4">
                <div className="space-y-1">
                    <Input
                        className="w-full"
                        name="username"
                        placeholder="Username"
                        defaultValue={state?.payload?.username || ""}
                    />
                    <FormErrorMessage error={state?.errors?.username} />
                </div>

                <div>
                    <Input
                        type="password"
                        className="w-full"
                        name="password"
                        placeholder="Password"
                        defaultValue={state?.payload?.password || ""}
                    />
                    <FormErrorMessage error={state?.errors?.password} />
                </div>
            </div>

            <div className="flex items-center space-x-2 self-start">
                <Checkbox id="remember" name="remember" />
                <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Remember me
                </label>
            </div>

            <Button
                className="w-full rounded-full"
                variant={"default"}
                disabled={pending}
                type="submit"
            >
                Sign In
            </Button>
            <div className="flex items-center justify-center gap-1">
                <Label className="text-sm text-accent-foreground">
                    Not registered?
                </Label>
                <Link href="/auth/register" className="text-sm text-primary">
                    Create an account
                </Link>
            </div>

            <div className="flex w-full items-center gap-2">
                <hr className="h-px flex-grow bg-muted" />
                <p className="text-xs text-muted-foreground">
                    OR CONTINUE WITH
                </p>
                <hr className="h-px flex-grow bg-muted" />
            </div>

            <div className="flex w-full items-center gap-2">
                <Button
                    className="w-full rounded-full"
                    variant="outline"
                    type="button"
                >
                    <Image
                        src="/google.svg"
                        width={24}
                        height={24}
                        alt="Logo"
                    />
                    <p className="font-semibold">Google</p>
                </Button>
                <Button
                    className="w-full rounded-full"
                    variant="outline"
                    type="button"
                >
                    <Image
                        src="/facebook.svg"
                        width={24}
                        height={24}
                        alt="Logo"
                    />
                    <p className="font-semibold">Facebook</p>
                </Button>
            </div>
        </form>
    );
}
