// import { z } from "zod";

// const configSchema = z.object({
//     NEXT_PUBLIC_BACKEND_URL: z.string(),
//     LOCAL_BACKEND_URL: z.string(),
// });

// const configProject = configSchema.safeParse({
//     NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
//     LOCAL_BACKEND_URL: process.env.LOCAL_BACKEND_URL,
// });
// if (!configProject.success) {
//     console.error(configProject.error.issues);
//     throw new Error("Invalid environment variables");
// }

// const envConfig = configProject.data;
// export default envConfig;
