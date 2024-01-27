const DropdownMenu = () => {
  return (
    <div className="relative inline-block text-left">
      {/* Trigger button */}
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring focus:border-blue-300"
      >
        Categories
        {/* Dropdown icon */}
        <svg
          className="ml-2 -mr-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v10a1 1 0 11-2 0V4a1 1 0 011-1zm-3 5a1 1 0 112 0v3a1 1 0 11-2 0v-3zm8 0a1 1 0 112 0v3a1 1 0 11-2 0v-3z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown panel */}
      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1">
          {/* Category 1 */}
          <div className="relative group">
            {/* Hoverable category header */}
            <div className="px-4 py-2 font-bold cursor-pointer group-hover:right-56">Category 1</div>

            {/* Subcategories */}
            <div className="absolute hidden right-0 top-0 w-56 bg-white border border-gray-200">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Subcategory 1.1
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Subcategory 1.2
              </a>
            </div>
          </div>

          {/* Category 2 */}
          <div className="border-t border-gray-200"></div>
          <div className="relative group">
            {/* Hoverable category header */}
            <div className="px-4 py-2 font-bold cursor-pointer group-hover:left-56">Category 2</div>

            {/* Subcategories */}
            <div className="absolute hidden right-0 top-0 w-56 bg-white border border-gray-200">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Subcategory 2.1
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Subcategory 2.2
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
