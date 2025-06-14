import { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


import Logo from '../assets/icons/ic-logo.svg';
import Overview from '../assets/icons/ic-overview.svg';
import OverviewActive from '../assets/icons/ic-overview-active.svg';
import Courier from '../assets/icons/ic-courier.svg';
import CourierActive from '../assets/icons/ic-courier-active.svg';
import Analytic from '../assets/icons/ic-analytic.svg';
import AnalyticActive from '../assets/icons/ic-analyti-active.svg';
import Tracking from '../assets/icons/ic-tracking.svg';
import TrackingActive from '../assets/icons/ic-tracking-active.svg';
import Inventory from '../assets/icons/ic-inventory.svg';
import InventoryActive from '../assets/icons/ic-inventory-active.svg';
import Truck from '../assets/icons/ic-truck.svg';
import TruckActive from '../assets/icons/ic-truck-active.svg';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
    {
        name: 'Overview',
        href: '#',
        current: true,
        icon: {
            active: Overview,
            inactive: OverviewActive,
        },
    },
    {
        name: 'Analytic',
        href: '#',
        current: false,
        icon: {
            active: Analytic,
            inactive: AnalyticActive,
        },
    },
    {
        name: 'Courier',
        href: '#',
        current: false,
        icon: {
            active: Courier,
            inactive: CourierActive,
        },
    },
    {
        name: 'Tracking',
        href: '#',
        current: false,
        icon: {
            active: Tracking,
            inactive: TrackingActive,
        },
    },
    {
        name: 'Inventory',
        href: '#',
        current: false,
        icon: {
            active: Inventory,
            inactive: InventoryActive,
        },
    },
    {
        name: 'Truck',
        href: '#',
        current: false,
        icon: {
            active: Truck,
            inactive: TruckActive,
        },
    },
]

const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes: Array<string | undefined | null | false>): string {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    return (
        <>

            <Disclosure as="nav" className="bg-white">
                <div className="mx-auto max-w-screen-2xl px-3 sm:px-3 lg:px-[32px] lg:py-[16px]">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="shrink-0">
                                <img
                                    alt="Your Company"
                                    src={Logo}
                                    className="size-40"
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            onMouseEnter={() => setHoveredItem(item.name)}
                                            onMouseLeave={() => setHoveredItem(null)}
                                            className={classNames(
                                                item.current ? 'text-primary-700 font-bold' : 'text-netral-400 hover:text-primary-700',
                                                'rounded-md text-sm font-medium py-[10px] px-[20px] flex gap-[8px]',
                                            )}
                                        >
                                            <img
                                                src={
                                                    item.current || hoveredItem === item.name
                                                        ? item.icon.inactive
                                                        : item.icon.active
                                                }
                                                alt={`${item.name} icon`}
                                                className="w-5 h-5"
                                            />
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6 gap-[10px]">
                                <button
                                    type="button"
                                    className="relative rounded-full bg-primary-100 p-1 text-primary-700 focus:ring-2 focus:outline-hidden"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon aria-hidden="true" className="size-6" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img alt="" src={user.imageUrl} className="size-8 rounded-full" />
                                        </MenuButton>
                                    </div>
                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                    >
                                        {userNavigation.map((item) => (
                                            <MenuItem key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                                >
                                                    {item.name}
                                                </a>
                                            </MenuItem>
                                        ))}
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            {/* Mobile menu button */}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                            </DisclosureButton>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="md:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium',
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                    <div className="border-t border-gray-700 pt-4 pb-3">
                        <div className="flex items-center px-5">
                            <div className="shrink-0">
                                <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
                            </div>
                            <div className="ml-3">
                                <div className="text-base/5 font-medium text-white">{user.name}</div>
                                <div className="text-sm font-medium text-gray-400">{user.email}</div>
                            </div>
                            <button
                                type="button"
                                className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">View notifications</span>
                                <BellIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-3 space-y-1 px-2">
                            {userNavigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </div>
                </DisclosurePanel>
            </Disclosure>

            {/* <header className="bg-white shadow-sm">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                </div>
            </header> */}
        </>
    )
}
