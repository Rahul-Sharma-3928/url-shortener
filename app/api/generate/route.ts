import { NextResponse } from "next/server";
import { collection } from "@/lib/mongodb";

export async function POST(request: Request) {
  const body = await request.json();

  const empty = String((await body.url) && body.shortUrl);
  if (empty == "") {
    return NextResponse.json({ message: "Please Input URL." });
  }

  const urlExists = await collection.findOne({ shortUrl: body.shortUrl });
  if (urlExists) {
    return NextResponse.json({ message: "URL Already Exists." });
  }

  const createUrl = await collection.insertOne({
    url: body.url,
    shortUrl: body.shortUrl,
  });

  if (createUrl) {
    return NextResponse.json({
      success: true,
      message: "Short URL Create Successfully...",
      createUrl: createUrl,
    });
  }
}
