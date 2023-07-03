import { hash } from "bcrypt"
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email, password, username } = await req.json()

        const hashed = await hash(password, 12)

        const user = await prisma.user.create({
            data: {
                email, password: hashed, name: username
            }
        })

        return NextResponse.json({
            user: {
                email: user.email,
                name: user.name,
            }
        })
    } catch (err:any) {
        return new NextResponse(JSON.stringify({
            error: err.message // TODO: ADD ERROR MESSAGE
        }),
        {
            status: 500
        }
      )
    }
    
}