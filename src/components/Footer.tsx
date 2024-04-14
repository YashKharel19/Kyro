import React from "react";

const Footer = () => {
  return (
    <>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div className="text-teal-600">
              <img src="../../public/LOGO.png" />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
              <div className="col-span-2">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 capitalize">
                    Subscribe To Our Newsletter
                  </h2>

                  {/* <p className="mt-4 text-gray-500">
                    and receive $40 coupon for your first order when you
                    checkout
                  </p> */}
                </div>
              </div>

              <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                <form className="w-full">
                  <label htmlFor="UserEmail" className="sr-only">
                    {" "}
                    Email{" "}
                  </label>

                  <div className="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="john@rhcp.com"
                      className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                    />

                    <button className="mt-1 w-full btn btn-base px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900">Categories</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Chew Bars
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Treats
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Cat Cave
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900">Helpful Links</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      FAQ
                    </a>
                  </li>

                  <li>
                    <a
                      href="/contactus"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Contacts
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Stores
                    </a>
                  </li>

                </ul>
              </div>
              <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/kyroment/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                {/* <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Tiktok</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.367 8.76c-.014.1-.098.173-.192.173H9.825c-.1 0-.178-.074-.192-.173l-.22-1.602c-.018-.116.06-.226.176-.243.022-.004.043-.006.064-.006h1.688c.098 0 .187.068.208.165l.165.9c.027.156.144.283.3.308.084.013.166-.024.211-.1l.401-.732c.065-.112.22-.112.285 0l.4.732c.045.076.127.113.211.1.155-.025.272-.152.3-.308l.165-.9c.02-.097.11-.165.208-.165h1.689c.076 0 .142.05.165.12.023.07-.01.145-.065.187l-2.094 1.628z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Pinterest</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M11.991.056C5.399.056.054 5.4.054 11.993c0 4.836 3.104 8.946 7.436 10.433-.102-.906-.195-2.303.039-3.298.215-.924 1.391-5.877 1.391-5.877s-.354-.715-.354-1.77c0-1.655.961-2.891 2.16-2.891 1.019 0 1.514.768 1.514 1.685 0 1.025-.652 2.555-.992 3.977-.283 1.181.6 2.146 1.759 2.146 2.11 0 3.743-2.226 3.743-5.431 0-2.835-2.038-4.817-4.947-4.817-3.373 0-5.382 2.522-5.382 5.132 0 .997.37 1.653.937 2.162.104.124.117.232.085.376-.09.387-.295 1.223-.338 1.397-.064.255-.218.307-.49.186-1.854-.89-3.022-3.678-3.022-6.188 0-5.194 3.783-9.516 10.703-9.516 5.657 0 9.433 3.816 9.433 8.009 0 5.395-3.084 9.724-7.633 9.724-1.494 0-2.894-.77-3.373-1.683l-.918 3.575c-.254.99-.953 2.23-1.416 2.987.088.209.341.46.512.614.433.414 1.08.767 1.614.755 1.368-.028 2.415-1.675 2.415-3.238 0-2.549-1.467-4.477-3.587-4.477-1.271 0-2.236.936-2.044 2.193.397 2.05 1.176 4.265 1.176 5.731 0 .671-.368 1.234-1.127 1.234-.224 0-.405-.191-.346-.416.064-.258.187-.848.253-1.126.12-.553.066-1.215-.063-1.646-.322-1.245-.843-2.743-.843-3.684 0-1.484.855-2.743 2.624-2.743 1.233 0 2.177.85 2.177 2.004 0 1.484-.753 3.478-1.277 4.837-.093.235-.381.46-.69.386-1.428-.34-2.451-1.838-2.451-3.649 0-2.754 2.202-6.092 6.551-6.092 3.402 0 5.979 2.464 5.979 5.755 0 3.399-2.15 6.14-5.124 6.14-1.006 0-1.962-.504-2.287-1.093l-.743 2.893c-.254.99-1.127 2.229-1.676 2.986.088.209.341.46.512.614.433.414 1.08.767 1.614.755 1.368-.028 2.415-1.675 2.415-3.238 0-2.088-1.192-4.398-3.322-4.398-1.265 0-2.236.936-2.044 2.193z" />

                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCPt4JeUCmlYWX0lhQrdcyBg"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Youtube</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.25 15.755l5.533-3.162-5.533-3.162v6.324z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-8">
            <div className="sm:flex sm:justify-between">
              <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()}. KYRO. All rights
                reserved.
              </p>

              <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
