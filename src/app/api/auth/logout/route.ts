export async function POST(request: Request) {
    await request.json();
    return Response.json(
        {
            message: "Cookie deleted successfully",
        },
        {
            status: 200,
            headers: {
                "Set-Cookie": `token=; Path=/; HttpOnly; Max-Age=0`,
            },
        },
    );
}
