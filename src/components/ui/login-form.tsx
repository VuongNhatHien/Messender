"use client";

import { signup } from "@/actions/auth";
import { useActionState } from "react";
import FormErrorMessage from "./form-error-message";

export default function LoginForm() {
    const [state, action, pending] = useActionState(signup, undefined);

    return (
        <form action={action}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" placeholder="Name" />
            </div>
            <FormErrorMessage errors={state?.errors?.name} />

            <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" placeholder="Email" />
            </div>
            <FormErrorMessage errors={state?.errors?.email} />

            <div>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />
            </div>
            {state?.errors?.password && (
                <FormErrorMessage errors={state?.errors?.password} />
            )}
            <button disabled={pending} type="submit">
                Sign Up
            </button>
        </form>
    );
}
