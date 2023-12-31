

export default function HeroSection() {
  

  return (
    <section className="bg-white overflow-hidden">
      <header className="absolute inset-x-0 top-0 z-50 border-b border-stone-300">
        <nav className="flex items-center p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Space X</span>
              <img
                className="h-8 w-auto"
                src="https://logos-world.net/wp-content/uploads/2020/09/SpaceX-Logo.png"
                alt=""
              />
            </a>
          </div>
        </nav>
      </header>

      <div className="relative isolate border-b-2 lg:h-1/2">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
        <div className="mx-auto max-w-7xl h-full max-h-[34rem] px-6 py-24 sm:py-32 lg:flex lg:gap-x-10 lg:px-8 lg:pb-10">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex"></div>
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              A better way to search for rockets
            </h1>
            <p className="mt-6 text-sm leading-8 text-gray-600">
              Esse id magna consectetur fugiat non dolor in ad laboris magna
              laborum ea consequat. Nisi irure aliquip nisi adipisicing veniam
              voluptate id. In veniam incididunt ex veniam adipisicing sit.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="hidden lg:block mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <foreignObject
              width={316}
              height={284}
              transform="translate(24 24)"
            >
              <img src="/phone.png" alt="" />
            </foreignObject>
          </div>
        </div>
      </div>
    </section>
  );
}
