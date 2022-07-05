/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Menu, Tab, Transition } from '@headlessui/react';
import { FilterIcon, StarIcon } from '@heroicons/react/solid';

import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
import { Popover } from '@headlessui/react';
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
];
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'View All Products', href: '#', icon: CheckCircleIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
];
const company = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: OfficeBuildingIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
];
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookmarkAltIcon },
  { name: 'Webinars', href: '#', icon: DesktopComputerIcon },
];
const filters = {
  price: [
    { value: '0', label: '$0 - $25', checked: false },
    { value: '25', label: '$25 - $50', checked: false },
    { value: '50', label: '$50 - $75', checked: false },
    { value: '75', label: '$75+', checked: false },
  ],
  color: [
    { value: 'white', label: 'White', checked: false },
    { value: 'beige', label: 'Beige', checked: false },
    { value: 'blue', label: 'Blue', checked: true },
    { value: 'brown', label: 'Brown', checked: false },
    { value: 'green', label: 'Green', checked: false },
    { value: 'purple', label: 'Purple', checked: false },
  ],
  size: [
    { value: 'xs', label: 'XS', checked: false },
    { value: 's', label: 'S', checked: true },
    { value: 'm', label: 'M', checked: false },
    { value: 'l', label: 'L', checked: false },
    { value: 'xl', label: 'XL', checked: false },
    { value: '2xl', label: '2XL', checked: false },
  ],
  category: [
    { value: 'all-new-arrivals', label: 'All New Arrivals', checked: false },
    { value: 'tees', label: 'Tees', checked: false },
    { value: 'objects', label: 'Objects', checked: false },
    { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
    { value: 'pants-and-shorts', label: 'Pants & Shorts', checked: false },
  ],
};
const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
];

const products = [
  {
    id: 1,
    name: 'Organize Basic Set (Walnut)',
    price: '$149',
    rating: 5,
    reviewCount: 38,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'Organize Pen Holder',
    price: '$15',
    rating: 5,
    reviewCount: 18,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'Organize Sticky Note Holder',
    price: '$15',
    rating: 5,
    reviewCount: 14,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 4,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 5,
    name: 'Organize Basic Set (Walnut)',
    price: '$149',
    rating: 5,
    reviewCount: 38,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 6,
    name: 'Organize Pen Holder',
    price: '$15',
    rating: 5,
    reviewCount: 18,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'Organize Sticky Note Holder',
    price: '$15',
    rating: 5,
    reviewCount: 14,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 7,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 1,
    name: 'Organize Basic Set (Walnut)',
    price: '$149',
    rating: 5,
    reviewCount: 38,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'Organize Pen Holder',
    price: '$15',
    rating: 5,
    reviewCount: 18,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'Organize Sticky Note Holder',
    price: '$15',
    rating: 5,
    reviewCount: 14,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 4,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 5,
    name: 'Organize Basic Set (Walnut)',
    price: '$149',
    rating: 5,
    reviewCount: 38,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 6,
    name: 'Organize Pen Holder',
    price: '$15',
    rating: 5,
    reviewCount: 18,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'Organize Sticky Note Holder',
    price: '$15',
    rating: 5,
    reviewCount: 14,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 7,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 1,
    name: 'Organize Basic Set (Walnut)',
    price: '$149',
    rating: 5,
    reviewCount: 38,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'Organize Pen Holder',
    price: '$15',
    rating: 5,
    reviewCount: 18,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'Organize Sticky Note Holder',
    price: '$15',
    rating: 5,
    reviewCount: 14,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 4,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 5,
    name: 'Organize Basic Set (Walnut)',
    price: '$149',
    rating: 5,
    reviewCount: 38,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 6,
    name: 'Organize Pen Holder',
    price: '$15',
    rating: 5,
    reviewCount: 18,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'Organize Sticky Note Holder',
    price: '$15',
    rating: 5,
    reviewCount: 14,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 7,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  // More products...
];

const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
];
const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: false },
  {
    name: 'Available Products',
    href: '/main',
    icon: CalendarIcon,
    current: true,
  },
  { name: 'Contact Us', href: '/contact', icon: PhoneIcon, current: false },
];


const navigation2 = [
  { name: 'Solutions', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Docs', href: '#' },
  { name: 'Company', href: '#' },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img
                      className="h-20 w-auto"
                      src="https://gitlab.com/moggymog/4way/-/raw/master/public/assets/usedgrade2.jpeg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="mt-5 flex-1 h-0 overflow-y-auto">
                    <nav className="px-2 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? 'text-gray-500'
                                : 'text-gray-400 group-hover:text-gray-500',
                              'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-30 w-auto"
                src="https://gitlab.com/moggymog/4way/-/raw/master/public/assets/usedgrade2.jpeg"
                alt="Workflow"
              />
            </div>
            <div className="mt-5 flex-grow flex flex-col">
              <nav className="flex-1 px-2 pb-4 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-gray-500'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 grow justify-between">
              <Popover className="relative bg-white">
                <div
                  className="absolute inset-0 shadow z-30 pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative z-20">
                  <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
                    <div className="-mr-2 -my-2 md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                    <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                      <Popover.Group as="nav" className="flex space-x-10">
                        <Popover>
                          {({ open }) => (
                            <>
                              <Popover.Button
                                className={classNames(
                                  open ? 'text-gray-900' : 'text-gray-500',
                                  'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                )}
                              >
                                <span>Home</span>
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? 'text-gray-600' : 'text-gray-400',
                                    'ml-2 h-5 w-5 group-hover:text-gray-500'
                                  )}
                                  aria-hidden="true"
                                />
                              </Popover.Button>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 -translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 -translate-y-1"
                              >
                                <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
                                  <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                                    {solutions.map((item) => (
                                      <a
                                        key={item.name}
                                        href={item.href}
                                        className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50"
                                      >
                                        <div className="flex md:h-full lg:flex-col">
                                          <div className="flex-shrink-0">
                                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                              <item.icon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                              />
                                            </span>
                                          </div>
                                          <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                            <div>
                                              <p className="text-base font-medium text-gray-900">
                                                {item.name}
                                              </p>
                                              <p className="mt-1 text-sm text-gray-500">
                                                {item.description}
                                              </p>
                                            </div>
                                            <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                                              Learn more{' '}
                                              <span aria-hidden="true">
                                                &rarr;
                                              </span>
                                            </p>
                                          </div>
                                        </div>
                                      </a>
                                    ))}
                                  </div>
                                  <div className="bg-gray-50">
                                    <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                                      {callsToAction.map((item) => (
                                        <div
                                          key={item.name}
                                          className="flow-root"
                                        >
                                          <a
                                            href={item.href}
                                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                          >
                                            <item.icon
                                              className="flex-shrink-0 h-6 w-6 text-gray-400"
                                              aria-hidden="true"
                                            />
                                            <span className="ml-3">
                                              {item.name}
                                            </span>
                                          </a>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                        <a
                          href="#"
                          className="text-base font-medium text-gray-500 hover:text-gray-900"
                        >
                          Products
                        </a>
                        <a
                          href="#"
                          className="text-base font-medium text-gray-500 hover:text-gray-900"
                        >
                          Contact
                        </a>
                        <Popover>
                          {({ open }) => (
                            <>
                              <Popover.Button
                                className={classNames(
                                  open ? 'text-gray-900' : 'text-gray-500',
                                  'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                )}
                              >
                                <span>More</span>
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? 'text-gray-600' : 'text-gray-400',
                                    'ml-2 h-5 w-5 group-hover:text-gray-500'
                                  )}
                                  aria-hidden="true"
                                />
                              </Popover.Button>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 -translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 -translate-y-1"
                              >
                                <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
                                  <div className="absolute inset-0 flex">
                                    <div className="bg-white w-1/2" />
                                    <div className="bg-gray-50 w-1/2" />
                                  </div>
                                  <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                                    <nav className="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                                      <div>
                                        <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                          Company
                                        </h3>
                                        <ul
                                          role="list"
                                          className="mt-5 space-y-6"
                                        >
                                          {company.map((item) => (
                                            <li
                                              key={item.name}
                                              className="flow-root"
                                            >
                                              <a
                                                href={item.href}
                                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                                              >
                                                <item.icon
                                                  className="flex-shrink-0 h-6 w-6 text-gray-400"
                                                  aria-hidden="true"
                                                />
                                                <span className="ml-4">
                                                  {item.name}
                                                </span>
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      <div>
                                        <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                          Resources
                                        </h3>
                                        <ul
                                          role="list"
                                          className="mt-5 space-y-6"
                                        >
                                          {resources.map((item) => (
                                            <li
                                              key={item.name}
                                              className="flow-root"
                                            >
                                              <a
                                                href={item.href}
                                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                                              >
                                                <item.icon
                                                  className="flex-shrink-0 h-6 w-6 text-gray-400"
                                                  aria-hidden="true"
                                                />
                                                <span className="ml-4">
                                                  {item.name}
                                                </span>
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </nav>
                                    <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                                      <div>
                                        <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                          From the blog
                                        </h3>
                                        <ul
                                          role="list"
                                          className="mt-6 space-y-6"
                                        >
                                          {blogPosts.map((post) => (
                                            <li
                                              key={post.id}
                                              className="flow-root"
                                            >
                                              <a
                                                href={post.href}
                                                className="-m-3 p-3 flex rounded-lg hover:bg-gray-100"
                                              >
                                                <div className="hidden sm:block flex-shrink-0">
                                                  <img
                                                    className="w-32 h-20 object-cover rounded-md"
                                                    src={post.imageUrl}
                                                    alt=""
                                                  />
                                                </div>
                                                <div className="w-0 flex-1 sm:ml-8">
                                                  <h4 className="text-base font-medium text-gray-900 truncate">
                                                    {post.name}
                                                  </h4>
                                                  <p className="mt-1 text-sm text-gray-500">
                                                    {post.preview}
                                                  </p>
                                                </div>
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      <div className="mt-6 text-sm font-medium">
                                        <a
                                          href="#"
                                          className="text-indigo-600 hover:text-indigo-500"
                                        >
                                          {' '}
                                          View all posts{' '}
                                          <span aria-hidden="true">&rarr;</span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      </Popover.Group>
                      <div className="flex items-center md:ml-12">
                        <a
                          href="#"
                          className="text-base font-medium text-gray-500 hover:text-gray-900"
                        >
                          Sign in
                        </a>
                        <a
                          href="#"
                          className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-rose-600 hover:bg-rose-700"
                        >
                          Sign up
                        </a>
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
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                      <div className="pt-5 pb-6 px-5 sm:pb-8">
                        <div className="flex items-center justify-between">
                          <div>
                            <img
                              className="h-8 w-auto"
                              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                              alt="Workflow"
                            />
                          </div>
                          <div className="-mr-2">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                              <span className="sr-only">Close menu</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="mt-6 sm:mt-8">
                          <nav>
                            <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                              {solutions.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50"
                                >
                                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                    <item.icon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <div className="ml-4 text-base font-medium text-gray-900">
                                    {item.name}
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="mt-8 text-base">
                              <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                {' '}
                                View all products{' '}
                                <span aria-hidden="true">&rarr;</span>
                              </a>
                            </div>
                          </nav>
                        </div>
                      </div>
                      <div className="py-6 px-5">
                        <div className="grid grid-cols-2 gap-4">
                          <a
                            href="#"
                            className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                          >
                            Pricing
                          </a>

                          <a
                            href="#"
                            className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                          >
                            Docs
                          </a>

                          <a
                            href="#"
                            className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                          >
                            Company
                          </a>

                          <a
                            href="#"
                            className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                          >
                            Resources
                          </a>

                          <a
                            href="#"
                            className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                          >
                            Blog
                          </a>

                          <a
                            href="#"
                            className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                          >
                            Contact Sales
                          </a>
                        </div>
                        <div className="mt-6">
                          <a
                            href="#"
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                          >
                            Sign up
                          </a>
                          <p className="mt-6 text-center text-base font-medium text-gray-500">
                            Existing customer?{' '}
                            <a
                              href="#"
                              className="text-indigo-600 hover:text-indigo-500"
                            >
                              Sign in
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>
          </div>

          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                <div className="py-4">
                  <main className="pb-24">
                    <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
                      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                        Welcome to the Used Grade Marketplace
                      </h1>
                      <p className="mt-4 max-w-xl mx-auto text-base text-gray-500">
                        Your one-stop stop shop to global electronics sourcing.
                      </p>
                    </div>

                    {/* Filters */}
                    <Disclosure
                      as="section"
                      aria-labelledby="filter-heading"
                      className="relative z-10 border-t border-b border-gray-200 grid items-center"
                    >
                      <h2 id="filter-heading" className="sr-only">
                        Filters
                      </h2>
                      <div className="relative col-start-1 row-start-1 py-4">
                        <div className="max-w-7xl mx-auto flex space-x-6 divide-x divide-gray-200 text-sm px-4 sm:px-6 lg:px-8">
                          <div>
                            <Disclosure.Button className="group text-gray-700 font-medium flex items-center">
                              <FilterIcon
                                className="flex-none w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              2 Filters
                            </Disclosure.Button>
                          </div>
                          <div className="pl-6">
                            <button type="button" className="text-gray-500">
                              Clear all
                            </button>
                          </div>
                        </div>
                      </div>
                      <Disclosure.Panel className="border-t border-gray-200 py-10">
                        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
                          <div className="grid grid-cols-1 gap-y-10 auto-rows-min md:grid-cols-2 md:gap-x-6">
                            <fieldset>
                              <legend className="block font-medium">
                                Price
                              </legend>
                              <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                                {filters.price.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center text-base sm:text-sm"
                                  >
                                    <input
                                      id={`price-${optionIdx}`}
                                      name="price[]"
                                      defaultValue={option.value}
                                      type="checkbox"
                                      className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                      defaultChecked={option.checked}
                                    />
                                    <label
                                      htmlFor={`price-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-600"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </fieldset>
                            <fieldset>
                              <legend className="block font-medium">
                                Color
                              </legend>
                              <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                                {filters.color.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center text-base sm:text-sm"
                                  >
                                    <input
                                      id={`color-${optionIdx}`}
                                      name="color[]"
                                      defaultValue={option.value}
                                      type="checkbox"
                                      className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                      defaultChecked={option.checked}
                                    />
                                    <label
                                      htmlFor={`color-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-600"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </fieldset>
                          </div>
                          <div className="grid grid-cols-1 gap-y-10 auto-rows-min md:grid-cols-2 md:gap-x-6">
                            <fieldset>
                              <legend className="block font-medium">
                                Size
                              </legend>
                              <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                                {filters.size.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center text-base sm:text-sm"
                                  >
                                    <input
                                      id={`size-${optionIdx}`}
                                      name="size[]"
                                      defaultValue={option.value}
                                      type="checkbox"
                                      className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                      defaultChecked={option.checked}
                                    />
                                    <label
                                      htmlFor={`size-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-600"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </fieldset>
                            <fieldset>
                              <legend className="block font-medium">
                                Category
                              </legend>
                              <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                                {filters.category.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center text-base sm:text-sm"
                                  >
                                    <input
                                      id={`category-${optionIdx}`}
                                      name="category[]"
                                      defaultValue={option.value}
                                      type="checkbox"
                                      className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                      defaultChecked={option.checked}
                                    />
                                    <label
                                      htmlFor={`category-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-600"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </fieldset>
                          </div>
                        </div>
                      </Disclosure.Panel>
                      <div className="col-start-1 row-start-1 py-4">
                        <div className="flex justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                          <Menu as="div" className="relative inline-block">
                            <div className="flex">
                              <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                Sort
                                <ChevronDownIcon
                                  className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
                              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                  {sortOptions.map((option) => (
                                    <Menu.Item key={option.name}>
                                      {({ active }) => (
                                        <a
                                          href={option.href}
                                          className={classNames(
                                            option.current
                                              ? 'font-medium text-gray-900'
                                              : 'text-gray-500',
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm'
                                          )}
                                        >
                                          {option.name}
                                        </a>
                                      )}
                                    </Menu.Item>
                                  ))}
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                    </Disclosure>

                    {/* Product grid */}
                    <section
                      aria-labelledby="products-heading"
                      className="max-w-full mx-auto overflow-hidden sm:px-6 lg:px-8"
                    >
                      <h2 id="products-heading" className="sr-only">
                        Products
                      </h2>

                      <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-8">
                        {products.map((product) => (
                          <div
                            key={product.id}
                            className="group relative p-4 border-r border-b border-gray-200 sm:p-6"
                          >
                            <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                              <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="w-full h-full object-center object-cover"
                              />
                            </div>
                            <div className="pt-10 pb-4 text-center">
                              <h3 className="text-sm font-medium text-gray-900">
                                <a href={product.href}>
                                  <span
                                    aria-hidden="true"
                                    className="absolute inset-0"
                                  />
                                  {product.name}
                                </a>
                              </h3>
                              <div className="mt-3 flex flex-col items-center">
                                <p className="sr-only">
                                  {product.rating} out of 5 stars
                                </p>
                                <div className="flex items-center">
                                  {[0, 1, 2, 3, 4].map((rating) => (
                                    <StarIcon
                                      key={rating}
                                      className={classNames(
                                        product.rating > rating
                                          ? 'text-yellow-400'
                                          : 'text-gray-200',
                                        'flex-shrink-0 h-5 w-5'
                                      )}
                                      aria-hidden="true"
                                    />
                                  ))}
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {product.reviewCount} reviews
                                </p>
                              </div>
                              <p className="mt-4 text-base font-medium text-gray-900">
                                {product.price}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Pagination */}
                    <nav
                      aria-label="Pagination"
                      className="max-w-7xl mx-auto px-4 mt-6 flex justify-between text-sm font-medium text-gray-700 sm:px-6 lg:px-8"
                    >
                      <div className="min-w-0 flex-1">
                        <a
                          href="#"
                          className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
                        >
                          Previous
                        </a>
                      </div>
                      <div className="hidden space-x-2 sm:flex">
                        {/* Current: "border-indigo-600 ring-1 ring-indigo-600", Default: "border-gray-300" */}
                        <a
                          href="#"
                          className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
                        >
                          1
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
                        >
                          2
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center px-4 h-10 border border-indigo-600 ring-1 ring-indigo-600 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
                        >
                          3
                        </a>
                        <span className="inline-flex items-center text-gray-500 px-1.5 h-10">
                          ...
                        </span>
                        <a
                          href="#"
                          className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
                        >
                          8
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
                        >
                          9
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
                        >
                          10
                        </a>
                      </div>
                      <div className="min-w-0 flex-1 flex justify-end">
                        <a
                          href="#"
                          className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
                        >
                          Next
                        </a>
                      </div>
                    </nav>
                  </main>
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
