import React from "react";

const Footer = () => {
  return (
    <div class="flex w-full flex-col items-center text-center justify-center gap-5 bg-slate-400 p-5 leading-10 text-white">
      <h2 class="font-averia text-5xl font-extrabold">
        Enjoy these stories? Become a member!
      </h2>
      <p class="font-sans text-xl">
        Animated stories in each language
        <br />
        Audio-only stories in each language
        <br />
        10 stories (so far...) <br />
        Many languages included
      </p>
      <div class="flex flex-col items-center gap-4">
        <a
          href="/memberships"
          target="_blank"
          class="hover:underline hover:underline-offset-4 border-1 rounded-full border-red-700 bg-red-500 px-4 py-2 text-red-100 shadow-md hover:text-white"
        >
          {" "}
          Become a member{" "}
        </a>
        <div class="flex gap-2">
          Already a member?
          <a
            href="/members/login"
            class="hover:underline hover:underline-offset-4"
          >
            {" "}
            Login here{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
