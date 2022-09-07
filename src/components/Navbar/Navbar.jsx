import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
const Recent = [
    { id: 1, recentLink: '#projects24', recentText: 'insta', recentStyle: 'bg-[#ef4444]' },
    { id: 2, recentLink: '#project9', recentText: 'Ex distinctio aliquid', recentStyle: 'bg-[#f43f5e]' },
    { id: 3, recentLink: '#project23', recentText: 'Training', recentStyle: 'bg-[#64748b]' },
    { id: 4, recentLink: '#project16', recentText: 'Eius eos', recentStyle: 'bg-[#3b82f6]' },
    { id: 5, recentLink: '#project14', recentText: 'At accusantium', recentStyle: 'bg-[#14b8a6]' },
]

const Navbar = () => {
    return (
        <div id='navbar' className='relative z-10 flex-shrink-0 flex h-16 bg-white'>
            <button className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
                <span className="sr-only">Open sidebar</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </button>
            <div className="flex-1 px-4 flex justify-between">
                <div className="flex-1 flex items-center px-4">
                    <div id="header-recent" className="dropdown relative">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                                    <span>Recent</span>
                                    <div className="ml-1">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-left absolute left-0 mt-5 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {/* {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal text-[16px] text-white ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))} */}
                                        {Recent.map((recent) => (
                                            <Link
                                                key={recent.id}
                                                to={recent.recentLink}
                                                className="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                                                <span
                                                    className={`${recent.recentStyle} block w-2 h-2 rounded-full`}
                                                // className="block w-2 h-2 rounded-full bg-[#ef4444]"
                                                // style={{ backgroundColor: 'rgb(239, 68, 68)' }}
                                                >
                                                    &nbsp;
                                                </span>
                                                <span className="ml-2 font-medium">{recent.recentText}</span>
                                            </Link>
                                        ))}
                                        {/* className={`${active ? 'bg-gray-200 text-black' : 'text-gray-900'
                                                        } group flex w-full items-center px-4 py-2 text-sm`} */}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                    <div id="header-create" className="dropdown relative ml-6">
                        <div id="header-create-trigger">
                            <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                                <span className="ml-2">Create</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:flex md:items-center md:ml-6 hidden">
                    <div id="header-timer" className="dropdown relative">
                        <div id="header-timer-trigger">
                            <button className="relative bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="header-notification" className="dropdown relative ml-5">
                        <div id="header-notification-trigger">
                            <button className="relative bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none" aria-label="Notifications">
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="header-profile" className="dropdown relative ml-5">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                                    <img src="https://spack.codedott.com/img/avatar_1.jpg" className="rounded-full h-8 w-8" />
                                    <div className="ml-2">Admin</div>
                                    <ChevronDownIcon
                                        className="ml-2 -mr-1 h-5 w-5 text-gray-700 hover:text-gray-900"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 mt-5 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <p className='px-4 py-2.5'>
                                        <span className='block text-xs text-gray-500 font-normal'>Signed in as</span>
                                        <span className='block text-sm font-normal text-gray-600 truncate mt-0.5'>admin@example.com</span>
                                    </p>
                                    <hr />
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to={"#profile"}
                                                    className={`${active ? 'bg-gray-200 text-black' : 'text-gray-900'
                                                        } group flex w-full items-center px-4 py-2 text-sm`}
                                                >
                                                    Profile
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to={'#logout'}
                                                    className={`${active ? 'bg-gray-200 text-black' : 'text-gray-900'
                                                        } group flex w-full items-center px-4 py-2 text-sm`}
                                                >
                                                    Logout
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar