import postsMapper from "@/mappers/posts.mapper";
import notionService from "@/services/notion.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const fieldIds = (request.nextUrl.searchParams.get("fieldIds") || "").split(
      ","
    );
    const response = await notionService.getPosts(fieldIds);
    const mappedPosts = postsMapper.mapResponseToPosts(response);
    return NextResponse.json(mappedPosts);
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}
