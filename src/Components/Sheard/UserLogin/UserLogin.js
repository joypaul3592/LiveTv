import React from 'react';

const UserLogin = () => {
    return (
        <div>
            <section class="">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0 md:h-[90vh] ">
                    <div class="w-full bg-white rounded-2xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl  ">
                                Sign Up
                                <hr className=' h-[3px] w-1/2 rounded-full bg-purple-400 mx-auto  mt-1' />
                            </h1>

                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
                                    <input type="text" name="text" id="text" class=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Joy Paul" required="" />
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input type="email" name="email" id="email" class=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="text-gray-500 ">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" class="text-sm font-medium text-gray-700 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit"
                                    className="  relative inline-flex items-center justify-center w-full px-5 py-2.5 overflow-hidden font-mono font-medium tracking-tighter text-black border border-gray-200  rounded-full group transition-all duration-300 ease-out"
                                >

                                    <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-purple-300 rounded-full group-hover:w-full group-hover:h-full"></span>
                                    <span class="absolute inset-0 w-full h-full  rounded-full opacity-30 transition-all duration-300 ease-out"></span>
                                    <span class="relative text-[13px] font-semibold">Sign Up</span>
                                </button>

                                <p class="text-sm  text-gray-500 ">
                                    Don’t have an account yet? <a href="#" class=" text-gray-700 hover:underline dark:text-primary-500 font-semibold ">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UserLogin;