import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { createIssueSchema } from "./createIssueSchema";

const prisma = new PrismaClient();   // import to check

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.format(), { status: 400})

    const newIssue = await prisma.issue.create({          // had problem with issue
        data: {title: body.title, description: body.description}
    });

    return NextResponse.json(newIssue, { status: 201});


}