export default function Blog() {
  return (
    <section
      id="blog"
      className="w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 h-full">
        <div className="h-auto flex flex-col justify-center">
          {/* Header */}
          <header className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-5xl">
              Latest Blog Posts
            </h2>
            <p className="mt-4 max-w-md mx-auto text-gray-500 dark:text-gray-300 mb-[2rem]">
              Stay updated with our latest news and articles
            </p>
          </header>

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-[3rem]">
            {/* Blog Post 1 */}
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.08]">
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                alt="Sustainable Trends"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>March 15, 2024</span> <span>•</span> <span>5 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  The Future of Fashion: Sustainable Trends
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Explore the latest sustainable fashion trends and how they're shaping the future of the industry.
                </p>
                <a
                  href="#"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
                >
                  Read More →
                </a>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform md:scale-110 md:-translate-y-4 hover:scale-[1.14]">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
                alt="Online vs In-store"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>March 12, 2024</span> <span>•</span> <span>4 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Shopping Smart: Online vs. In-Store
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A comprehensive guide to making the most of your shopping experience, whether online or in-store.
                </p>
                <a
                  href="#"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
                >
                  Read More →
                </a>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.08]">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04"
                alt="Spring 2024"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>March 10, 2024</span> <span>•</span> <span>6 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Seasonal Style Guide: Spring 2024
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Discover the must-have styles and trends for the upcoming spring season.
                </p>
                <a
                  href="#"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
                >
                  Read More →
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}