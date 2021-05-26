export default function Home() {
  const darkMode = true;
  return (
    <div className="flex flex-col justify-center h-screen dark:bg-gray-800">
      <img
        className="mx-auto w-1/5 h-15 rounded-md"
        src="https://avatars0.githubusercontent.com/u/6097819?s=460&v=4"
      ></img>
      <h1 className="text-center text-3xl font-normal tracking-wide mt-6 dark:text-white">
        Hajaniaina Rafaliarintsoa
      </h1>
      <div className="flex flex-row mx-auto mt-6">
        <a href="https://twitter.com/_hajaniain">
          <img
            className="w-8 mx-3 rounded-md focus:ring-4"
            src="twitter.svg"
          ></img>
        </a>
        <a href="https://github.com/hajaniain">
          <img className="w-8 mx-3 rounded-md" src="github.svg"></img>
        </a>
        <a href="https://www.linkedin.com/in/hajaniaina-marius-rafaliarintsoa-a5b202b9">
          <img className="w-8 mx-3 rounded-md" src="linkedin.svg"></img>
        </a>
      </div>
    </div>
  );
}
