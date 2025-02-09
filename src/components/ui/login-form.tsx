"use client";

import { login } from "@/actions/common";
import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { Input } from "./input";
import { Label } from "./label";

export default function LoginForm() {
    const [state, action, pending] = useActionState(login, undefined);
    console.log(state);

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
                        name="name"
                        placeholder="Username"
                        // defaultValue={(state?.payload.name || "") as string}
                    />
                    {/* <FormErrorMessage errors={state?.errors?.name} /> */}
                </div>

                <div>
                    <Input
                        type="password"
                        className="w-full"
                        name="password"
                        placeholder="Password"
                        // defaultValue={(state?.payload.password || "") as string}
                    />
                    {/* <FormErrorMessage errors={state?.errors?.password} /> */}
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
                Create account
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
