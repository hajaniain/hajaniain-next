import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hajaniaina Rafaliarintsoa</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col justify-center h-screen dark:bg-gray-800">
        <img
          className="mx-auto w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 rounded-md"
          src="https://avatars0.githubusercontent.com/u/6097819?s=460&v=4"
          alt="hajaniaina marius rafaliarintsoa image"
        ></img>
        <h1 className="text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-normal tracking-wide mt-6 dark:text-white">
          Hajaniaina Rafaliarintsoa
        </h1>
        <div className="flex flex-row mx-auto mt-6">
          <a href="https://twitter.com/_hajaniain">
            <img
              className="w-8 mx-3 rounded-md focus:ring-4"
              src="twitter.svg"
              alt="hajaniaina rafaliarintsoa's twitter"
            ></img>
          </a>
          <a href="https://github.com/hajaniain">
            <img
              className="w-8 mx-3 rounded-md"
              src="github.svg"
              alt="hajaniaina rafaliarintsoa's github"
            ></img>
          </a>
          <a href="https://www.linkedin.com/in/hajaniaina-marius-rafaliarintsoa-a5b202b9">
            <img
              className="w-8 mx-3 rounded-md"
              src="linkedin.svg"
              alt="hajaniaina rafaliarintsoa's linkedin"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
