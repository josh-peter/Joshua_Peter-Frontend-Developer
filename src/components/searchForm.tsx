
export default function SearchForm() {
  return (
    <div className="bg-white lg:px-28 sm:px-10 sm:py-9">
      <h2 className="text-4xl font-normal mb-6">Search Form</h2>

      <form className="grid gap-6 mb-6 md:grid-cols-3">
        <div>
          <input
            type="text"
            id="search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Input Place Holder"
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Input Place Holder"
            required
          />
        </div>
        <div>
          <button
            type="button"
            className="border hover:bg-white hover:text-black flex justify-center items-center bg-black text-white font-bold  border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 md:block py-3 px-20 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}



