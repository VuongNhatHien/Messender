"use client";

import { signup } from "@/actions/auth";
import { useActionState } from "react";
import FormErrorMessage from "./form-error-message";
import { Input } from "./input";
import { Button } from "./button";
import Image from "next/image";

export default function RegisterForm() {
    const [state, action, pending] = useActionState(signup, undefined);

    return (
        <form
            className="card w-80 items-center justify-center p-4"
            action={action}
        >
            <Image src="/logo.png" width={48} height={48} alt="Logo" />
            <div className="mt-3 w-full space-y-4">
                <div className="">
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

            <Button
                className="mt-3 w-full rounded-full"
                variant={"default"}
                disabled={pending}
                type="submit"
            >
                Create account
            </Button>
        </form>
    );
}
