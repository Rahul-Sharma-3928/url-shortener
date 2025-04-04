import { collection } from "@/lib/mongodb";
import { redirect } from "next/navigation";

interface ParamsTypes {
  params: Promise<{ shortUrl: string }>;
}
const URL = async ({ params }: ParamsTypes) => {
  const shortUrl = (await params).shortUrl;

  const urlExists = await collection.findOne({ shortUrl: shortUrl });
  if (!urlExists || !urlExists.url) {
    return redirect(process.env.NEXT_PUBLIC_HOST!);
  } else {
    return redirect(urlExists.url);
  }
};

export default URL;
