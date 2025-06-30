export default function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="h-auto flex flex-col justify-center">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Perfect Shopping Plan
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Select the membership that best suits your shopping needs
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.08] transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Basic Shopper</h2>
                <p className="text-4xl font-bold text-gray-900 dark:text-white mb-4">$99/year</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Perfect for occasional shoppers who want to enjoy basic benefits and discounts.
                </p>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                  Get Started
                </button>

                <ul className="mt-8 space-y-3 text-gray-600 dark:text-gray-300">
                  <li>✅ 5% off on all purchases</li>
                  <li>✅ Free standard shipping</li>
                  <li>✅ 30-day return policy</li>
                </ul>
              </div>
            </div>

            {/* Premium (Featured) */}
            <div className="bg-white dark:bg-gray-800 border-2 border-blue-500 rounded-xl shadow-lg transform md:-translate-y-4 hover:scale-[1.08] active:scale-[0.95] transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Premium Shopper</h2>
                    <p className="text-4xl font-bold text-gray-900 dark:text-white mb-4">$199/year</p>
                  </div>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Ideal for regular shoppers who want premium benefits and exclusive deals.
                </p>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                  Get Started
                </button>

                <ul className="mt-8 space-y-3 text-gray-600 dark:text-gray-300">
                  <li>✅ 15% off on all purchases</li>
                  <li>✅ Free express shipping</li>
                  <li>✅ 60-day return policy</li>
                  <li>✅ Priority customer support</li>
                  <li>✅ Early access to sales</li>
                </ul>
              </div>
            </div>

            {/* VIP */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.08] transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">VIP Shopper</h2>
                <p className="text-4xl font-bold text-gray-900 dark:text-white mb-4">$399/year</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  For serious shoppers who want the ultimate shopping experience with maximum benefits.
                </p>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                  Get Started
                </button>

                <ul className="mt-8 space-y-3 text-gray-600 dark:text-gray-300">
                  <li>✅ 25% off on all purchases</li>
                  <li>✅ Free same-day delivery</li>
                  <li>✅ 90-day return policy</li>
                  <li>✅ 24/7 VIP support</li>
                  <li>✅ Exclusive VIP events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}