import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function Home() {
  const defaultDark = defaultTheme() === "dark";
  const [darkMode, setDarkMode] = useState(defaultDark);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTheme(darkMode);
    setLoaded(true);
  });

  return (
    <div>
      <Head>
        <title>Hajaniaina Rafaliarintsoa</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Hajaniaina Marius Rafaliarintsoa's personal website."
        ></meta>
      </Head>
      {loaded && (
        <div className="dark:text-white absolute top-3 right-3">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <ThemeButton d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            ) : (
              <ThemeButton d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            )}
          </button>
        </div>
      )}
      <div className="flex flex-col justify-center h-screen bg-gray-200 dark:bg-gray-800">
        <img
          className="mx-auto w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 rounded-lg shadow-2xl"
          src="https://avatars0.githubusercontent.com/u/6097819?s=460&v=4"
          alt="hajaniaina marius rafaliarintsoa image"
        ></img>
        <h1 className="text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light tracking-wide mt-6 dark:text-white">
          Hajaniaina Rafaliarintsoa
        </h1>
        <div className="flex flex-row mx-auto mt-6">
          <SocialLink
            href="https://twitter.com/_hajaniain"
            src="twitter.svg"
            alt="hajaniaina rafaliarintsoa's twitter"
          />
          <SocialLink
            href="https://github.com/hajaniain"
            src="github.svg"
            alt="hajaniaina rafaliarintsoa's github"
          />
          <SocialLink
            href="https://www.linkedin.com/in/hajaniaina-marius-rafaliarintsoa-a5b202b9"
            src="linkedin.svg"
            alt="hajaniaina rafaliarintsoa's linkedin"
          />
          <SocialLink
            href="https://www.instagram.com/faliarintsoa/"
            src="instagram.svg"
            alt="hajaniaina rafaliarintsoa's instagram"
          />
        </div>
      </div>
    </div>
  );
}

function defaultTheme() {
  if (typeof window !== "undefined") {
    if (
      window.localStorage.theme === "dark" ||
      (!("theme" in window.localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      return "light";
    }
  }
  return "dark";
}

function setTheme(darkMode) {
  if (darkMode) {
    window.localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  } else {
    window.localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  }
}

function SocialLink(props) {
  return (
    <a href={props.href} target="_blank">
      <img
        className="w-7 md:w-10 mx-3 rounded-md shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        src={props.src}
        alt={props.alt}
      ></img>
    </a>
  );
}

function ThemeButton(props) {
  return (
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={props.d}
      />
    </svg>
  );
}
