// import { z } from "zod";

// export const RegisterSchema = z
//     .object({
//         name: z.string().min(1, { message: "Username is required" }).trim(),
//         displayName: z.string().min(1, { message: "Display name is required" }),
//         password: z
//             .string()
//             .min(8, { message: "Password must be at least 8 characters long" })
//             .regex(/[a-zA-Z]/, {
//                 message: "Password must contain at least one letter",
//             })
//             .regex(/[0-9]/, {
//                 message: "Password must contain at least one number",
//             })
//             .trim(),
//         confirmPassword: z.string(),
//     })
//     .refine((data) => data.password === data.confirmPassword, {
//         message: "Passwords do not match",
//         path: ["confirmPassword"], // path of error
//     });

export type RegisterState =
    | {
          errors?: {
              username?: string;
              displayName?: string;
              password?: string;
              confirmPassword?: string;
          };
          message?: string;
      }
    | undefined;

export type LoginState =
    | {
          errors?: {
              username?: string;
              password?: string;
              remember?: string;
          };
          message?: string;
      }
    | undefined;

export type MessageState =
    | {
          errors?: {
              message?: string;
          };
          message?: string;
      }
    | undefined;
