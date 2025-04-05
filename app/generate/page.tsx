"use client";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";

const Generate = () => {
  const [url, setUrl] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string>("");
  const [generated, setGenerated] = useState<string>("");

  const generate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url, shortUrl: shortUrl }),
    });

    const data = await value.json();
    alert(data.message);
    setGenerated(`${process.env.NEXT_PUBLIC_HOST!}/${shortUrl}`);

    return data;
  };

  return (
    <section className="max-w-full mx-auto h-[79vh] text-center shadow-lg">
      <form onSubmit={generate}>
        <div className="max-w-lg mx-auto bg-purple-400 rounded m-10 text-white py-10 ">
          <h1 className="text-3xl text-green-400 font-medium">
            Generate short URL here...
          </h1>
          <div className="flex justify-center items-center gap-2 flex-col my-8 px-10">
            <input
              className="w-full bg-white border outline-purple-500 py-1 px-1 text-black"
              type="text"
              placeholder="Enter your url..."
              value={url}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setUrl(e.target.value);
              }}
            />
            <input
              className="w-full bg-white border outline-purple-500 py-2 px-1 text-black "
              type="text"
              placeholder="Enter your preferred short url text"
              value={shortUrl}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setShortUrl(e.target.value)
              }
            />
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 shadow-lg shadow-purple-500/60 rounded py-1.5 px-4 my-4 text-white"
            >
              Generate
            </button>
            {generated && (
              <>
                <span className="font-bold">Your Link:</span>
                <code>
                  <Link target="_blank" href={generated}>
                    {generated}
                  </Link>
                </code>
              </>
            )}
          </div>
        </div>
      </form>
    </section>
  );
};

export default Generate;
