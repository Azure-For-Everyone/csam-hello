export default function Home() {

  // Write me a function to show an alert with the message "Hello beautiful CSAM."
  // The function should be called when the page is loaded.

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">Hello beautiful CSAM{" "}.</li>
          <li className="mb-2">The app innovation CSAs love you!</li>
          <li className="mb-2">How can we make you more successful?</li>
          <li className="mb-2">Enjoy your friday!</li>
        </ol>


        <p className="text-sm text-center sm:text-left">
          We are here to help you succeed. Let us know how we can help you.{" "}
          <br />
          We are always here to help you.
        </p>


        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send love back ❤️❤️❤️
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create unified opportunities 💰💰💰
          </a>
        </div>
      </main>
    </div>
  );
}
