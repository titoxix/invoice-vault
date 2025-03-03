import Image from "next/image";

export default function CardList() {
  return (
    <div className="w-full max-w-md p-4 border rounded-lg shadow-sm sm:p-8 bg-gray-800 border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-white">
          Lastest Expenses
        </h5>
        {/* <a
          href="#"
          className="text-sm font-medium hover:underline text-blue-500"
        >
          View all
        </a> */}
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="shrink-0">
                <Image
                  src="/rent-invoice.png"
                  width={32}
                  height={32}
                  className="rounded-md"
                  alt="Expense picture"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium  truncate text-white">
                  El Granel
                </p>
                <p className="text-sm  truncate text-gray-400">03/03/2025</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-white">
                Gs. 15,000
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center ">
              <div className="shrink-0">
                <Image
                  src="/rent-invoice.png"
                  width={32}
                  height={32}
                  className="rounded-md"
                  alt="Expense picture"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium truncate text-white">
                  Petropar
                </p>
                <p className="text-sm truncate text-gray-400">01/03/2025</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-white">
                Gs. 300.000
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="shrink-0">
                <Image
                  src="/rent-invoice.png"
                  width={32}
                  height={32}
                  className="rounded-md"
                  alt="Expense picture"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium truncate text-white">
                  Biggie
                </p>
                <p className="text-sm truncate text-gray-400">28/02/2025</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-white">
                Gs. 26.000
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center ">
              <div className="shrink-0">
                <Image
                  src="/rent-invoice.png"
                  width={32}
                  height={32}
                  className="rounded-md"
                  alt="Expense picture"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium truncate text-white">Anglo</p>
                <p className="text-sm truncate text-gray-400">03/03/2025</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold  text-white">
                Gs. 284.000
              </div>
            </div>
          </li>
          <li className="pt-3 pb-0 sm:pt-4">
            <div className="flex items-center ">
              <div className="shrink-0">
                <Image
                  src="/rent-invoice.png"
                  width={32}
                  height={32}
                  className="rounded-md"
                  alt="Expense picture"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium  truncate text-white">
                  El cafe de áca
                </p>
                <p className="text-sm truncate text-gray-400">03/03/2025</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-white">
                Gs. 160.000
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
