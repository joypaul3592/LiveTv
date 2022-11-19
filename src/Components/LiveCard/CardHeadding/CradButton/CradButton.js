import React from 'react';

const CradButton = () => {
    return (
        <div class="inline-flex rounded-md shadow-sm" role="group">
            <button type="button" class="py-2 px-4 text-sm font-medium text-black bg-transparent rounded-l-lg border border-black hover:bg-gray-900 hover:text-white focus:z-10  focus:ring-black focus:bg-gray-900 focus:text-white dark:border-gray-600 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                Profile
            </button>
            <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-black hover:bg-gray-900 hover:text-white focus:z-10  focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-gray-600 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                Settings
            </button>
            <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10  focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-gray-600 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                Downloads
            </button>
        </div>
    );
};

export default CradButton;