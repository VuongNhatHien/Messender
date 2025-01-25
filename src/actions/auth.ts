import { RegisterSchema, FormState } from "@/lib/definitions";

export async function signup(state: FormState, formData: FormData) {
    // Validate form fields
    const payload = {
        name: formData.get("name"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    };
    const validatedFields = RegisterSchema.safeParse(payload);

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            payload: payload,
        };
    }

    alert("User created successfully!");

    // Call the provider or db to create a user...
}
