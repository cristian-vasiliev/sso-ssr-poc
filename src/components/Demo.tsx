"use client";

import { handleAction } from "@/actions/login";
import {
  EmailInput,
  PasswordInput,
  Text,
} from "@crunchyroll/cx-web-components";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import imgSrc from "@/assets/img.png";
import imgSrc2 from "@/assets/img-2.png";
import imgSrcFragment from "@/assets/img-fragment.png";
import bgSrc from "@/assets/bg.png";

export function Demo() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passFocused, setPassFocused] = useState(false);

  return (
    <main className="text-white h-screen bg-black flex flex-col gap-8 justify-center items-center">
      <Image
        src={bgSrc}
        alt="bg"
        className="absolute inset-0 -z-1 object-cover"
      />

      <header className="fixed top-0 left-0 right-0 flex justify-center items-center w-full px-8 py-4 bg-gray-800">
        <Text as="h4" size="xl">
          SSO Demo
        </Text>
      </header>

      <form
        className="flex flex-col items-center gap-8 relative z-10"
        action={handleAction}
      >
        <div className="flex flex-col items-center">
          <div className="w-[32rem] relative top-0">
            <Image
              className={clsx("w-full", { "opacity-0": passFocused })}
              src={imgSrc}
              alt="test"
            />

            <Image
              src={imgSrcFragment}
              alt="fragment"
              className="absolute -bottom-[4.2rem] -left-[0.2rem] w-full z-20"
            />

            <Image
              className={clsx("w-full absolute top-0 left-0", {
                "opacity-0": !passFocused,
              })}
              src={imgSrc2}
              alt="test"
            />
          </div>
          <div className="pl-3 pr-8 w-[32rem] relative z-10">
            <div className="flex flex-col gap-4 px-8 py-12 bg-gray-800">
              <EmailInput
                label="Email"
                dataT="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                required
              />
              <PasswordInput
                label="Password"
                type="password"
                dataT="123"
                value={pass}
                onChange={(e: any) => setPass(e.target.value)}
                onFocus={() => setPassFocused(true)}
                onBlur={() => setPassFocused(false)}
                required
              />
            </div>
          </div>
        </div>

        <button className="bg-orange-500 py-2 px-8" type="submit">
          Login
        </button>
      </form>
    </main>
  );
}
