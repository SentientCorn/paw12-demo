import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit") || 10;

  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
      { next: { revalidate: 60 } },
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch posts" },
        { status: 500 },
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 },
    );
  }
}
