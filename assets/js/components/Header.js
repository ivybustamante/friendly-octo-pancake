export function Header() {
    return `
        <header>
            <nav class="border-gray-200 px-4 py-2.5 bg-gray-800 dark:bg-gray-800">
                <div class="mx-auto max-w-screen-xl">

                    <div class="flex items-center justify-between">

                        <!-- Logo -->
                        <a href="/" class="flex items-center">
                            <img
                                src="/assets/images/poison-ivy-logo.png"
                                class="h-16 sm:h-20"
                                alt="Poison Ivy Logo"
                            />
                        </a>

                        <!-- Mobile burger -->
                        <button
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            class="
                                inline-flex items-center
                                p-2
                                text-sm
                                text-gray-500
                                rounded-lg
                                lg:hidden
                                hover:bg-gray-100
                                focus:outline-none
                                focus:ring-2
                                focus:ring-gray-200
                                dark:text-gray-400
                                dark:hover:bg-gray-700
                                dark:focus:ring-gray-600
                            "
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                        >
                            <span class="sr-only">Open main menu</span>

                            <!-- Burger icon -->
                            <svg
                                class="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z
                                    M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z
                                    M3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>

                            <!-- Close icon -->
                            <svg
                                class="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586
                                    l4.293-4.293a1 1 0 111.414 1.414
                                    L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414
                                    L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414
                                    L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>

                        <!-- Desktop menu -->
                        <div class="hidden lg:block">
                            <ul class="flex items-center gap-8 font-medium">
                                <li>
                                    <a href="#" class="text-white hover:text-gray-300">
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="text-white hover:text-gray-300">
                                        Company
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="text-white hover:text-gray-300">
                                        Marketplace
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="text-white hover:text-gray-300">
                                        Features
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="text-white hover:text-gray-300">
                                        Team
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="text-white hover:text-gray-300">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <!-- Mobile menu -->
                    <div
                        class="hidden w-full lg:hidden"
                        id="mobile-menu-2"
                    >
                        <ul class="flex flex-col items-center mt-4 font-medium">
                            <li>
                                <a href="#" class="block py-2 px-3 text-white">Home</a>
                            </li>

                            <li>
                                <a href="#" class="block py-2 px-3 text-white">Company</a>
                            </li>

                            <li>
                                <a href="#" class="block py-2 px-3 text-white">Marketplace</a>
                            </li>

                            <li>
                                <a href="#" class="block py-2 px-3 text-white">Features</a>
                            </li>

                            <li>
                                <a href="#" class="block py-2 px-3 text-white">Team</a>
                            </li>

                            <li>
                                <a href="#" class="block py-2 px-3 text-white">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    `;
}