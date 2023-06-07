import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const accessToken = request.headers.get("auth");
  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(
      JSON.stringify({
        error: "unauthorized",
      }),
      { status: 401 }
    );
  }

  const userPosts = await prisma.record.findMany({
    where: { ownerId: +params.id },
    include: {
      owner: {
        select: {
          email: true,
          name: true,
        },
      },
    },
  });

  return new Response(JSON.stringify(userPosts));
}
