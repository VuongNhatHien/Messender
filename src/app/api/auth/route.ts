import { LoginResponseType } from "@/types/response.type";

export async function POST(request: Request) {
    const body = (await request.json()) as LoginResponseType;
    const token = body.token;
    const expiresIn = body.expiresIn;
    const expiresAt = Date.now() + expiresIn;
    if (!token) {
        return Response.json(
            { message: "Token not found" },
            {
                status: 400,
            },
        );
    }
    const expiresDate = new Date(expiresAt).toUTCString();
    return Response.json(body, {
        status: 200,
        headers: {
            //temporarily turn off secure
            "Set-Cookie": `token=${token}; Path=/; HttpOnly; Expires=${expiresDate}; SameSite=Lax;`,
        },
    });
}
