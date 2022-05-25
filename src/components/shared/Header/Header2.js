import * as React from "react";

// React
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { NavLink as Link } from "react-router-dom";

// Heroicons
import {
  HomeIcon,
  ChatIcon,
  BookOpenIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";

const mainNavLinks = [
  {
    name: "Home",
    order: 1,
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "About",
    order: 2,
    href: "/about",
    icon: BookOpenIcon,
  },
  { name: "Contact", order: 7, href: "/contact", icon: ChatIcon },
];

export default function Header2() {
  return (
    <div className="">
      <Popover className="absolute w-full top-0 z-50 bg-white/0">
        <div
          className="absolute inset-0 z-30 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-20">
          <div className="max-w-6xl px-4 xl:px-0 w-auto mx-auto flex justify-between items-center py-5 sm:py-4 md:justify-end md:space-x-10">
            <div className={"flex"}>
              <Link
                to="/"
                className="flex justify-center text-xl font-semibold tracking-widest text-gray-900 uppercase"
              >
                <span className="font-light">Sara</span>
                <span className="font-bold">Dow</span>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                <span className="sr-only">Menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
              <Popover.Group className="flex space-x-10 "></Popover.Group>
              <div className="flex items-center md:ml-12">
                <Popover.Group as="nav" className="flex space-x-10 ">
                  <Link
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-base uppercase font-normal text-gray-900 hover:transition-all border-b border-gray-900"
                        : "text-base uppercase font-normal text-gray-900 hover:transition-all hover:border-b hover:border-gray-900"
                    }
                  >
                    Projects
                  </Link>
                  <Link
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "text-base uppercase font-normal text-gray-900 hover:transition-all border-b border-gray-900"
                        : "text-base uppercase font-normal text-gray-900 hover:transition-all hover:border-b hover:border-gray-900"
                    }
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-base uppercase font-normal text-gray-900 hover:transition-all border-b border-gray-900"
                        : "text-base uppercase font-normal text-gray-900 hover:transition-all hover:border-b hover:border-gray-900"
                    }
                  >
                    Contact
                  </Link>
                </Popover.Group>
              </div>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
              <div className="pt-5 pb-6 px-5 sm:pb-8">
                <div className="flex items-center justify-between text-xl font-semibold tracking-widest text-gray-900 uppercase">
                  <div>
                    <span className="font-light">Sara</span>
                    <span className="font-bold">Dow</span>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-10 sm:mt-10">
                  <nav>
                    <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                      {mainNavLinks.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50"
                        >
                          <div className="text-black">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">
                            {item.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
