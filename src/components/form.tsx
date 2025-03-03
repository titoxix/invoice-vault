export default function Form() {
  return (
    <form className="max-w-sm mx-auto">
      <div className="mb-5">
        <label
          htmlFor="merchant"
          className="block mb-2 text-sm font-medium  text-white"
        >
          Merchant
        </label>
        <input
          type="text"
          id="merchant"
          className=" border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Merchant name"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="amount"
          className="block mb-2 text-sm font-medium  text-white"
        >
          Amount (PYG)
        </label>
        <input
          type="number"
          id="amount"
          className=" border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="date"
          className="block mb-2 text-sm font-medium  text-white"
        >
          Date
        </label>
        <input
          type="date"
          id="date"
          className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
      >
        Register
      </button>
    </form>
  );
}
