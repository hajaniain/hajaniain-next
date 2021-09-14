import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import helloDark from '../public/hello-dark.svg'
import helloLight from '../public/hello-light.svg'

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
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wide mt-6 dark:text-white">
          Hajaniaina Rafaliarintsoa
        </h1>
        <div className="flex flex-row mx-auto mt-6">
          <SocialLink
            href="https://twitter.com/_hajaniain"
            alt="hajaniaina rafaliarintsoa's twitter"
            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
          />
          <SocialLink
            href="https://github.com/hajaniain"
            alt="hajaniaina rafaliarintsoa's github"
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          />
          <SocialLink
            href="https://www.linkedin.com/in/hajaniaina-marius-rafaliarintsoa-a5b202b9"
            alt="hajaniaina rafaliarintsoa's linkedin"
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
          >
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/faliarintsoa/"
            width="40"
            fill="currentColor"
            viewBox="0 0 16 16"
            strokeWidth="0"
            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
          />
        </div>
        <div className="opacity-70 absolute bottom-0 lg:w-1/2 md:w-3/4 sm:w-full left-0 right-0 ml-auto mr-auto">
          {darkMode ? (
            <Image src={helloDark}></Image>
          ) : (
            <Image src={helloLight}></Image>
          )}
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
  const defaultValue = {
    width: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
  };
  return (
    <a href={props.href} target="_blank" className="dark:text-white mx-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=" w-8 h-8 md:w-10 md:h-10"
        width={props.width || defaultValue.width}
        height={props.width || defaultValue.width}
        viewBox={props.viewBox || defaultValue.viewBox}
        fill={props.fill || defaultValue.fill}
        stroke={props.stroke || defaultValue.stroke}
        strokeWidth={props.strokeWidth || defaultValue.strokeWidth}
      >
        <path d={props.d}></path>
        {props.children}
      </svg>
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
