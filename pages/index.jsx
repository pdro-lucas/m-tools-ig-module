import axios from "axios";
import Head from "next/head";

import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [user, setUser] = useState([]);

  const getUser = async (username) => {
    const { data } = await axios.post("/api/user", {
      username,
    });
    setUser(data.data.business_discovery.media);
    console.log(user.data);
  };

  return (
    <>
      <Head>
        <title>M Tools - Instagram Module</title>
        <meta name="description" content="M Tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full">
        <section className="lg:container flex flex-col items-center justify-center mb-12 h-[600px]">
          <div className="text-center">
            <h1 className="font-extrabold text-2xl mb-12">Search User</h1>
            <input
              className="bg-zinc-800 rounded-l-full py-2 px-4 border-none"
              type="text"
              placeholder="Digite o nome do usuário"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className="bg-blue-500 px-4 py-2 rounded-r-full"
              onClick={() => getUser(value)}
              disabled={!value}
            >
              Search
            </button>
          </div>
        </section>
        <section className="lg:container">
          <div className="flex gap-4 flex-wrap">
            {user.data ? (
              user.data.map((value) => (
                <div key={value.id} className="md:w-[372px] w-full">
                  <a href={value.permalink}>
                    <img
                      src={value.media_url}
                      alt="ig_image"
                      className="w-full"
                    />
                  </a>
                </div>
              ))
            ) : (
              <h1>Nada</h1>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
