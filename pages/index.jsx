import axios from "axios";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [user, setUser] = useState({});

  const getUser = async (username) => {
    const { data } = await axios.post("/api/user", {
      username,
    });
    console.log(data);
    setUser(() => data);
    console.log(user);
  };
  return (
    <>
      <Head>
        <title>M Tools - Instagram Module</title>
        <meta name="description" content="M Tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="lg:container flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="font-extrabold text-xl mb-12">Search User</h1>
            <input
              className="bg-zinc-800 rounded-full py-2 px-4 border-none"
              type="text"
              placeholder="Digite o nome do usuário"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className="bg-blue-500 ml-4 px-4 py-2 rounded-md"
              onClick={() => getUser(value)}
              disabled={!value}
            >
              Search
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
