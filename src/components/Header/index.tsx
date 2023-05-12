import Image from 'next/image';
import styles from './styles.module.css';
import Modal from 'react-modal';

import { Fragment, useState } from 'react';

import { Popover, Transition } from '@headlessui/react';

import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import Example from './Dropdown/Solutions';
import Solutions from './Dropdown/Solutions';
import Institucional from './Dropdown/Institucional';
import Cart from '../Modal/cart';

const playersData = [
  {
    name: 'Cristiano Ronaldo',
    id: 1,
    market_price: 1000,
    specialization: 'futsal',
    player_record: 'Olympic Special',
    quantity: 1,
    desc: 'Neque aut veniam consectetur magnam libero, natus eius numquam reprehenderit hic at, excepturi repudiandae magni optio odio doloribus? Facilisi lobortisal morbi fringilla urna amet sed ipsum.',
  },
  {
    name: 'Lionel Messi',
    id: 2,
    market_price: 900,
    specialization: 'basketball',
    player_record: 'Record Special',
    quantity: 1,
    desc: 'Neque aut veniam consectetur magnam libero, natus eius numquam reprehenderit hic at, excepturi repudiandae magni optio odio doloribus? Facilisi lobortisal morbi fringilla urna amet sed ipsum.',
  },
];

const products = [
  {
    name: 'Moeda',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Idioma',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Home',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'MKT Place',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
];

const navigation = [
  {
    name: (
      <>
        <b>Moeda</b>
        <div
          className={`${styles.mobileBtn} ${styles.customButtons}
      } ${styles.customButtonsIdiomas}`}
        >
          <div className="flex">
            <button
              className={`ml-2 bg-button-transparent h-[40px] mr-2 language-mobile-btn flex justify-center items-center rounded-full ${styles.active}`}
            >
              R$ Real
            </button>

            <button className="ml-2 bg-button-transparent h-[40px]  language-mobile-btn flex justify-center items-center rounded-full">
              $ Dolar
            </button>
          </div>
        </div>
      </>
    ),
    href: '#',
  },
  {
    name: (
      <>
        <b>Idioma</b>
        <div
          className={`${styles.mobileBtn} ${styles.customButtons}
        ${styles.customButtonsIdiomas}`}
        >
          <div className="flex">
            <button
              className={`ml-2 bg-button-transparent  h-[40px] mr-2 language-mobile-btn flex justify-center items-center rounded-full  ${styles.active}`}
            >
              <Image
                src="/images/icon-pt.png"
                height={24}
                width={24}
                alt="PT"
              />
            </button>

            <button className="ml-2 bg-button-transparent h-[40px]  language-mobile-btn flex justify-center items-center rounded-full">
              <Image
                src="/images/icon-en.png"
                height={24}
                width={24}
                alt="EN"
              />
            </button>
          </div>

          <div className="flex mobile-pages-btn">
            <button className="ml-2 bg-button-transparent h-[40px] flex justify-center items-center rounded-full">
              Área Clientes
            </button>

            <button
              className={`ml-2 bg-button-transparent h-[40px] flex justify-center items-center rounded-full`}
            >
              Área do Parceiro
            </button>
          </div>
        </div>
      </>
    ),
    href: '#',
  },
  {
    name: 'Home',
    href: '/home',
  },
  {
    name: 'MKT Place',
    href: '#',
  },
  {
    name: 'Institucional',
    href: '#',
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

type Item = {
  id: number;
  name: string;
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  function handleSelect(item: Item) {
    setSelectedItem(item);
  }

  return (
    <>
      <div
        className={`${styles.main} w-full h-[88px] flex items-center bg-[#0D102D] lg:h-24 header 2xl:px-[65px]`}
      >
        <div className="flex items-center justify-between">
          <div className="relative w-full flex">
            <Image
              src="/assets/images/logo.svg"
              width={142}
              height={26}
              alt="Logo"
              className="lg:mr-[32px] "
            />
          </div>

          <div className="flex">
            <div>
              <Popover.Group className={`${styles.container}`}>
                <div className="hidden xl:flex ">
                  <Link
                    href="/home"
                    className="not-italic font-normal text-base leading-[150%] flex items-center text-left text-white xl:px-[14px]"
                  >
                    Home
                  </Link>

                  <div className="not-italic font-normal text-base leading-[150%] flex items-center text-center text-white xl:px-[14px]">
                    <Solutions></Solutions>
                  </div>
                  <div className="not-italic font-normal text-base leading-[150%] flex items-center text-center text-white xl:px-[14px]">
                    <Institucional></Institucional>
                  </div>

                  <Popover className="flex items-center text-center gap-3 text-base">
                    <Popover.Button
                      onClick={() => window.open('/auth/cadastro/', '_self')}
                      className="bg-button-transparent h-[40px] not-italic font-semibold text-sm rounded-full leading-[150%] flex items-center text-center text-[#00E4FF]"
                    >
                      Área Clientes
                    </Popover.Button>

                    <Link
                      href="/auth/cadastro/parceiro"
                      className="bg-button-transparent h-[40px] not-italic font-semibold text-sm rounded-full leading-[150%] flex items-center text-center text-[#00E4FF]"
                    >
                      Área do Parceiro
                    </Link>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute hidden -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl  shadow-lg ring-1 bg-[#0d0236]">
                        <div className="p-4">
                          <div
                            className="bg-[#0D0035]"
                            aria-labelledby="login-heading"
                          >
                            <div className="pai-modal-login">
                              <div className="header-modal-login">
                                <p>LOGIN</p>
                                <div className="tipos-login">
                                  <a>Cliente</a>
                                  <a>Parceiro</a>
                                </div>
                              </div>
                              <div className="content-modal-login"></div>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                </div>
              </Popover.Group>
            </div>
          </div>
        </div>
        <div className={`${styles.container_right}`}>
          <Link
            href="/auth/"
            className="ml-2 bg-button-transparent h-[40px] not-italic font-semibold text-xs rounded-full leading-[150%] flex items-center text-center w-auto min-w-max text-[#EEEEEE] bg-[#31344C] px-4 py-0"
          >
            <Image
              src="/assets/images/lupa.svg"
              height={13}
              width={13}
              alt=""
            />
          </Link>
          <button className="ml-2 bg-button-transparent h-[40px] not-italic font-semibold text-xs rounded-full leading-[150%] flex items-center text-center w-auto min-w-max text-[#EEEEEE] bg-[#31344C] px-4 py-0">
            R$ Real
          </button>
          <button className="ml-2 bg-button-transparent h-[40px] not-italic font-semibold text-xs rounded-full leading-[150%] flex items-center text-center w-auto min-w-max text-[#EEEEEE] bg-[#31344C] px-4 py-0">
            <Image
              src="/assets/images/icoHeaderPT.svg"
              height={24}
              width={24}
              alt="PT"
            />
            <span className="hidden xl:block px-2">PT-BR</span>
            <span className="px-2 xl:hidden">PT-br</span>
          </button>
          <Link
            href="/auth/"
            className="ml-2 bg-button-transparent h-[40px] not-italic font-semibold text-xs rounded-full leading-[150%] flex items-center text-center w-auto min-w-max text-[#EEEEEE] bg-[#31344C] px-4 py-0"
          >
            <Image
              src="/assets/images/icoAccount.svg"
              height={16}
              width={16}
              alt=""
            />
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="ml-2 bg-button-transparent h-[40px] not-italic font-semibold text-xs rounded-full leading-[150%] flex items-center text-center w-auto min-w-max text-[#EEEEEE] bg-[#31344C] px-4 py-0"
          >
            <Image
              src="/assets/images/icoCart.svg"
              height={16}
              width={16}
              alt=""
            />{' '}
            {playersData?.length > 0 && (
              <div className="badge ">
                <span>{playersData?.length}</span>
              </div>
            )}
          </button>
        </div>
      </div>
      {isModalOpen ? (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          className="bg-[#131740] rounded-md p-4 mr-36 mt-4 shadow-md fixed top-20 right-20"
          overlayClassName="bg-opacity-50 fixed inset-0 z-10 "
          preventScroll={false}
        >
          {/* <div>Modal content goes here</div>
          <button onClick={() => setIsModalOpen(false)}>Close Modal</button> */}
          <Cart cartList={playersData} closeModal={closeModal} />
        </Modal>
      ) : (
        ''
      )}
    </>
  );
};

export default Header;
