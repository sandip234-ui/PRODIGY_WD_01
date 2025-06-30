export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full py-10 bg-gray-50 dark:bg-gray-800 sm:pt-16 lg:pt-24 transition-colors duration-300"
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Top Footer */}
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          {/* Logo + Text */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <img src="/images/logo.png" alt="Logo" className="w-auto h-9 rounded-full" />
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 mt-7">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            {/* Socials */}
            <ul className="flex items-center space-x-3 mt-9">
              {[
                ['fab fa-twitter', 'Twitter'],
                ['fab fa-facebook-f', 'Facebook'],
                ['fab fa-instagram', 'Instagram'],
                ['fab fa-github', 'GitHub'],
              ].map(([icon, label]) => (
                <li key={label}>
                  <a
                    href="#"
                    title={label}
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 dark:bg-gray-700 rounded-full w-7 h-7 hover:bg-teal-600 focus:bg-teal-600 dark:hover:bg-teal-500 dark:focus:bg-green-500"
                  >
                    <i className={`${icon} w-4 h-4`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 dark:text-gray-500 uppercase">Company</p>
            <ul className="mt-6 space-y-4">
              {['About', 'Features', 'Works', 'Career'].map((item) => (
                <li key={item}>
                  <a
                    href="#about"
                    className="flex text-base text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 dark:text-gray-500 uppercase">Help</p>
            <ul className="mt-6 space-y-4">
              {['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex text-base text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 dark:text-gray-500 uppercase">Subscribe to Sainex</p>
            <div className="mt-6">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="block w-full p-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:border-teal-600 dark:focus:border-teal-400 caret-teal-600 dark:caret-teal-400"
              />
              <button
                type="button"
                className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-teal-600 rounded-md hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-16 mb-10 border-gray-200 dark:border-gray-700 transition-colors duration-300" />

        {/* Bottom Footer */}
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          © Copyright 2024, All Rights Reserved by Your Company
        </p>
      </div>
    </footer>
  );
}