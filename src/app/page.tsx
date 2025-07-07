import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-400 to-sky-900 flex flex-col items-center justify-center">
      <main className="p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-600 mb-2 text-center">
          TIMORA
        </h1>
        <p className="text-gray-500">
          Optimize your day with intelligent scheduling and insights.
        </p>
      </main>
    </div>
  );
};

export default Home;
