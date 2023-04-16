import { NextRequest, NextResponse } from "next/server";
import courses from "../data.json";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const query: any = searchParams.get("query");
    const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(query?.toLowerCase()));
    return NextResponse.json(filteredCourses)
}