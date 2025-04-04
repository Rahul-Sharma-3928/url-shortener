import urlImage from "@/images/url.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-[1380px] mx-auto h-[85vh] my-[1px] px-10">
      <section className="flex justify-center items-center flex-col sm:flex-row">
        <div className="basis-[60%] m-15 order-2 sm:order-1 px-10">
          <h1 className="text-2xl font-bold">URL Shortener</h1>
          <p>
            ShortURL allows you to create short links from various sites and
            platforms. Paste the long URL, click the button, and get a short URL
            to share and track.
          </p>
          <Link href={"/generate"}>
            <button className="bg-purple-500 hover:bg-purple-600 shadow-lg shadow-purple-500/60 rounded py-1.5 px-3 my-4 text-white">
              Try Now
            </button>
          </Link>
        </div>
        <div className="basis-[40%] m-15 order-1 sm:order-2">
          <Image
            className="mix-blend-darken py-10"
            src={urlImage}
            alt="url shortener image"
            width={350}
            height={300}
          />
        </div>
      </section>
    </main>
  );
}
