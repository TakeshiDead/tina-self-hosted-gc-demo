import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

export default function Login({}) {
  const { locale, asPath, push } = useRouter();
  const { data: session } = useSession();
  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    if (session) {
      push("/dashboard");
    }
  }, [session]);

  return (
    <div>
      <Head>
        <title>Elkouri Heath</title>
      </Head>

      <main className="relative flex flex-col items-center justify-center w-full h-screen retina:py-24 bg-green">
        {session ? (
          <div className="z-10 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-center text-white uppercase font-display">
              Welcome Back!
            </h1>
            <Link
              className="p-2 mt-4 text-white rounded bg-darkGreen"
              href="/dashboard"
            >
              Enter the Dashboard
            </Link>
          </div>
        ) : (
          <div className="z-10 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-center text-white uppercase font-display">
              Welcome Back!
            </h1>
            <button
              onClick={() => signIn("google")}
              className="flex flex-row items-center justify-center px-4 py-2 my-8 bg-white gap-x-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
              </svg>
              <p className="font-bold text-black font-body">
                {" "}
                Sign in with Google{" "}
              </p>
            </button>
          </div>
        )}
        <Link href={"/"} className="">
          Back
        </Link>
      </main>
    </div>
  );
}
