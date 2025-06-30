export default function Products() {
  return (
    <section id="products" className="w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 h-full">
        <div className="h-auto flex flex-col justify-center text-center">
          <header>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-5xl sm:text-3xl">Product Collection</h2>
            <p className="mt-4 max-w-md text-gray-500 dark:text-gray-300 mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit natus?
            </p>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Product Item 1 */}
            <li>
              <a href="#" className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://assets.ajio.com/medias/sys_master/root/20240427/zx3R/662c067a16fd2c6e6ad8884c/-473Wx593H-467268902-white-MODEL.jpg"
                  alt="Basic Tee"
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div className="relative bg-white dark:bg-gray-800 pt-3">
                  <h3 className="text-xs text-gray-700 dark:text-gray-300 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>
                  <p className="mt-2 tracking-wider text-gray-900 dark:text-white">£24.00 GBP</p>
                </div>
              </a>
            </li>

            {/* Product Item 2 */}
            <li>
              <a href="#" className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://brownliving.in/cdn/shop/products/sustainable-t-shirt-recycled-plastic-recycled-cotton-blend-authentic-design-a13786-1-m-mens-tshirt-brown-living-540735.jpg?v=1682968317&width=800"
                  alt="Sustainable T-shirt"
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div className="relative bg-white dark:bg-gray-800 pt-3">
                  <h3 className="text-xs text-gray-700 dark:text-gray-300 group-hover:underline group-hover:underline-offset-4">
                    Sustainable T-shirt
                  </h3>
                  <p className="mt-2 tracking-wider text-gray-900 dark:text-white">£24.00 GBP</p>
                </div>
              </a>
            </li>

            {/* Product Item 3 */}
            <li>
              <a href="#" className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://nobero.com/cdn/shop/files/black_8f2f0bb4-9293-4d6f-a179-c918d7602384.jpg?v=1712232992"
                  alt="Black T-shirt"
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div className="relative bg-white dark:bg-gray-800 pt-3">
                  <h3 className="text-xs text-gray-700 dark:text-gray-300 group-hover:underline group-hover:underline-offset-4">
                    Black T-shirt
                  </h3>
                  <p className="mt-2 tracking-wider text-gray-900 dark:text-white">£24.00 GBP</p>
                </div>
              </a>
            </li>

            {/* Product Item 4 */}
            <li>
              <a href="#" className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://nobero.com/cdn/shop/files/og.jpg?v=1744007258"
                  alt="Classic T-shirt"
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div className="relative bg-white dark:bg-gray-800 pt-3">
                  <h3 className="text-xs text-gray-700 dark:text-gray-300 group-hover:underline group-hover:underline-offset-4">
                    Classic T-shirt
                  </h3>
                  <p className="mt-2 tracking-wider text-gray-900 dark:text-white">£24.00 GBP</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}