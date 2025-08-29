// src/app/api/work/route.ts
import { NextResponse } from "next/server";
import { getWork } from "@/lib/apiList";

export async function GET() {
    try {
        const work = await getWork();
        return NextResponse.json(work);
    } catch (err) {
        console.error("Work API error:", err);
        return NextResponse.json({ error: "Failed to fetch work" }, { status: 500 });
    }
}
