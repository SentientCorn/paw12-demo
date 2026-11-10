export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Welcome to the demo app</h1>
        <p className="text-lg"> Please select a service to get started.</p>
        <div className="flex flex-row gap-4 sm:grid-cols-2 md:gap-8">
          <a
            href="/weather"
            className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
          >
            Weather
          </a>
          <a
            href="/posts"
            className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
          >
            Posts
          </a>
        </div>
      </div>
    </main>
  );
}
