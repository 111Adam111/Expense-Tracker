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



  const records = await prisma.record.findMany({
    where: { ownerId: +params.id } as any,
    include: {
      owner: {
        select: {
          email: true,
          name: true,
        },
      },
    } as any,
  });

  return new Response(JSON.stringify(records));
}
