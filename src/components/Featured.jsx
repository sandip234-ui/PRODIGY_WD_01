export default function Featured() {
  return (
    <section id="latest" className="w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 h-full">
        <div className="h-auto flex flex-col justify-center">
          <header className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-5xl">Featured Products</h2>
            <p className="mt-4 max-w-md mx-auto text-gray-500 dark:text-gray-300">
              Check out our latest limited edition releases
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <a href="#" className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-[350px] sm:h-[450px]">
                <img
                  src="https://www.tennis-point.co.uk/dw/image/v2/BBDP_PRD/on/demandware.static/-/Sites-master-catalog/default/dwab2e92f9/images/004/142/14557000_0_1.jpg"
                  alt="Trainer Front"
                  className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                />
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5ed6e10fb011a123217ba702/1727139534806-K219WNSVFLFTG6QOO2I3/unsplash-image-164_6wVEHfI.jpg"
                  alt="Trainer Back"
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="relative bg-white dark:bg-gray-800 pt-3">
                <h3 className="text-sm text-gray-700 dark:text-gray-300 group-hover:underline group-hover:underline-offset-4">
                  Limited Edition Sports Trainer
                </h3>
                <div className="mt-1.5 flex items-center justify-between text-gray-900 dark:text-white">
                  <p className="tracking-wide">$189.99</p>
                  <p className="text-xs tracking-wide uppercase">6 Colors</p>
                </div>
              </div>
            </a>

            {/* Product 2 */}
            <a href="#" className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-[350px] sm:h-[450px]">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
                  alt="Trainer A"
                  className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7"
                  alt="Trainer B"
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="relative bg-white dark:bg-gray-800 pt-3">
                <h3 className="text-sm text-gray-700 dark:text-gray-300 group-hover:underline group-hover:underline-offset-4">
                  Urban Flex Sneakers
                </h3>
                <p className="mt-1.5 tracking-wide text-gray-900 dark:text-white">$149.99</p>
              </div>
            </a>

            {/* Product 3 */}
            <a href="#" className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-[350px] sm:h-[450px]">
                <img
                  src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
                  alt="Trainer X"
                  className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb"
                  alt="Trainer Y"
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="relative bg-white dark:bg-gray-800 pt-3">
                <h3 className="text-sm text-gray-700 dark:text-gray-300 group-hover:underline group-hover:underline-offset-4">
                  Eco Runner Series
                </h3>
                <div className="mt-1.5 flex items-center justify-between text-gray-900 dark:text-white">
                  <p className="tracking-wide">$169.99</p>
                  <p className="text-xs tracking-wide uppercase">3 Colors</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}