import React from "react";

const Header = () => {
  return (
    <div class="flex w-full flex-col items-center justify-stretch gap-4 bg-slate-400">
      <div class="w-full bg-slate-500 p-4 opacity-80">
        <ul class="flex w-full justify-end gap-4 text-sm text-white">
          <li class="hover:underline hover:underline-offset-4">
            <a href="#" class="">
              {" "}
              About Us{" "}
            </a>
          </li>
          <li class="hover:underline hover:underline-offset-4">
            <a href="#" class="">
              {" "}
              Contact{" "}
            </a>{" "}
            Us
          </li>
          <li class="hover:underline hover:underline-offset-4">
            <a href="#" class="">
              {" "}
              Support{" "}
            </a>
          </li>
          <li class="hover:underline hover:underline-offset-4">
            <a href="#" class="">
              {" "}
              Login{" "}
            </a>
          </li>
        </ul>
      </div>
      <div class="flex flex-col items-center gap-20">
        <h1 class="font-averia text-5xl font-extrabold text-white">
          The Story Tales
        </h1>
        <h2 class="font-averia text-3xl font-extrabold text-white">
          Multi Lingual stories for language learners
        </h2>
      </div>
      <div class="flex w-full flex-wrap md:items-center md:justify-center gap-4 bg-slate-500 p-4 opacity-80 justify-evenly">
        <div class="">
          <a
            href="/languages/english"
            class="flex items-center gap-2 hover:underline hover:decoration-white hover:underline-offset-4"
          >
            <div class="">
              <img
                src="https://assets-global.website-files.com/5a77a1d44323220001d792d2/5bf251afb7d3e9eb33695e6a_uk-v2.png"
                alt="English"
                class="h-8 w-8 rounded-full"
              />
            </div>
            <div class="text-sm text-white">English</div>
          </a>
        </div>
        <div>
          <a
            href="/languages/english"
            class="flex items-center gap-2 hover:underline hover:decoration-white hover:underline-offset-4"
          >
            <div class="">
              <img
                src="https://assets-global.website-files.com/5a77a1d44323220001d792d2/5bf251afb7d3e9eb33695e6a_uk-v2.png"
                alt="English"
                class="h-8 w-8 rounded-full"
              />
            </div>
            <div class="text-sm text-white">Kannada</div>
          </a>
        </div>
        <div>
          <a
            href="/languages/english"
            class="flex items-center gap-2 hover:underline hover:decoration-white hover:underline-offset-4"
          >
            <div class="">
              <img
                src="https://assets-global.website-files.com/5a77a1d44323220001d792d2/5bf251afb7d3e9eb33695e6a_uk-v2.png"
                alt="English"
                class="h-8 w-8 rounded-full"
              />
            </div>
            <div class="text-sm text-white">Sanskrit</div>
          </a>
        </div>
        <div>
          <a
            href="/languages/english"
            class="flex items-center gap-2 hover:underline hover:decoration-white hover:underline-offset-4"
          >
            <div class="">
              <img
                src="https://assets-global.website-files.com/5a77a1d44323220001d792d2/5bf251afb7d3e9eb33695e6a_uk-v2.png"
                alt="English"
                class="h-8 w-8 rounded-full"
              />
            </div>
            <div class="text-sm text-white">Hindi</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
// 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
