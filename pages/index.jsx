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

      <main>
        <section className="lg:container flex flex-col items-center justify-center h-screen">
          <div className="text-center mb-12">
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
          <div className="flex gap-4">
            {user.data ? (
              user.data.map((value) => (
                <div key={value.id}>
                  <img src={value.media_url} alt="ig_image" width={300} />
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
