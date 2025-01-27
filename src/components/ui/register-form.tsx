"use client";

import { signup } from "@/actions/auth";
import { useActionState } from "react";
import FormErrorMessage from "./form-error-message";
import { Input } from "./input";
import { Button } from "./button";
import Image from "next/image";
import { Label } from "./label";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterForm() {
    const router = useRouter();
    const [state, action, pending] = useActionState(signup, undefined);

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
                        name="name"
                        placeholder="Username"
                        defaultValue={(state?.payload.name || "") as string}
                    />
                    <FormErrorMessage errors={state?.errors?.name} />
                </div>

                <div>
                    <Input
                        type="password"
                        className="w-full"
                        name="password"
                        placeholder="Password"
                        defaultValue={(state?.payload.password || "") as string}
                    />
                    <FormErrorMessage errors={state?.errors?.password} />
                </div>

                <div>
                    <Input
                        type="password"
                        className="w-full"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        defaultValue={
                            (state?.payload.confirmPassword || "") as string
                        }
                    />
                    <FormErrorMessage errors={state?.errors?.confirmPassword} />
                </div>
            </div>

            <Link
                href={"/auth/register"}
                className="!mt-1 self-end text-sm text-primary"
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
                <Link href="/auth/login" className="text-sm text-primary">
                    Login
                </Link>
            </div>
        </form>
    );
}
