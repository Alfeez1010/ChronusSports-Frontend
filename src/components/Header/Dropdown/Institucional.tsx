import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import styles from './styles.module.css'


interface Anchor {
  href: string;
  label: string;
}

export default function Institucional() {

  const items: Anchor[] = [
    { href: '/sobre', label: 'Sobre' },
    { href: '/faq', label: 'FAQ' },
    { href: '/codigodeconduta', label: 'Código de Conduta' },
    { href: '/politica', label: 'Política de Privacidade' },
  ];

  return (
    <div className="top-16 text-center items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-[#0D102D] text-base not-italic font-normal text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 items-center">
            Institucional
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
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
          <Menu.Items className={`${styles.menu} absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
            <div className="px-1 py-1 ">
                {items.map((item) =>(
                  <Menu.Item key={item.href} as={Fragment}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={`${
                        item.href == "/" ? styles.inactive : styles.active
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {item.label}
                    </a>
                   )}
                </Menu.Item>      
                ))}            
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}



