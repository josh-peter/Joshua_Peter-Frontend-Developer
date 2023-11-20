/* eslint-disable @typescript-eslint/no-explicit-any */

interface ISearchProps{
  setSearch: any
}

export default function SearchForm({setSearch}: ISearchProps) {
  return (
    <div className="bg-white lg:px-28 sm:px-10 sm:py-9">

      <form className="grid gap-6 mb-6 md:grid-cols-3">
        <div>
          <input
            type="text"
            id="search"
            onChange={(e) => setSearch('rocketName', e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search with rocket name, country "
            required
          />
        </div>

        <div>
          <button
            type="button"
            className="border hover:bg-white hover:text-black flex justify-center items-center bg-black text-white font-bold  border-gray-300 text-sm rounded-lg md:block py-3 px-20 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}



