import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import NavLink from 'next/link'
import { useRouter } from 'next/router'
import { navbarType } from '../types'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}


export const Navbar = () => {
    const router = useRouter()

    const navbar: navbarType = [
        { path: '/', name: 'Home'},
        { path: '/achievements', name: 'Achivements'},
        { path: '/about-me', name: 'About Me'}
    ]

    return (
        <Disclosure as="nav" className="bg-white shadow">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="hidden lg:block h-8 w-auto"
                                        src="logo.svg"
                                        alt="Workflow"
                                    />
                                </div>

                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                    {navbar.map((item) => (
                                        <NavLink href={item.path} className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                        <a className={router.pathname == item.path ? "border-indigo-500 text-gray-900 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" : "border-transparent text-gray-900 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}>
                                    {item.name}
                                        </a>
                                        </NavLink>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}