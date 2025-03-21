"use client";

import { register } from "@/actions/actions.common";
import Link from "next/link";
import { useActionState } from "react";
import { Button } from "../../ui/button";
import FormErrorMessage from "../../ui/form-error-message";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

export default function RegisterForm() {
    const [state, action, pending] = useActionState(register, undefined);

    return (
        <form
            className="card w-80 items-center justify-center space-y-4 p-4"
            action={action}
        >
            <p className="text-2xl font-semibold">Create an account</p>
            <div className="w-full space-y-4">
                <div className="space-y-1">
                    <Input
                        className="w-full"
                        name="username"
                        placeholder="Username"
                        defaultValue={state?.payload.username || ""}
                    />
                    <FormErrorMessage error={state?.errors?.username} />
                </div>

                <div className="space-y-1">
                    <Input
                        className="w-full"
                        name="displayName"
                        placeholder="Display name"
                        defaultValue={state?.payload.displayName || ""}
                    />
                    <FormErrorMessage error={state?.errors?.displayName} />
                </div>

                <div>
                    <Input
                        type="password"
                        className="w-full"
                        name="password"
                        placeholder="Password"
                        defaultValue={state?.payload.password || ""}
                    />
                    <FormErrorMessage error={state?.errors?.password} />
                </div>

                <div>
                    <Input
                        type="password"
                        className="w-full"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        defaultValue={state?.payload.confirmPassword || ""}
                    />
                    <FormErrorMessage error={state?.errors?.confirmPassword} />
                </div>
            </div>

            <Link
                href={"/auth/register"}
                className="!mt-1 self-end text-sm text-blue-500"
            >
                Forgot password?
            </Link>

            <Button
                className="mt-3 w-full rounded-full"
                variant={"default"}
                disabled={pending}
                type="submit"
            >
                Create account
            </Button>
            <div className="mt-3 flex items-center justify-center gap-1">
                <Label className="text-sm text-accent-foreground">
                    Already have an account?
                </Label>
                <Link href="/auth/login" className="text-sm text-blue-500">
                    Login
                </Link>
            </div>
        </form>
    );
}
