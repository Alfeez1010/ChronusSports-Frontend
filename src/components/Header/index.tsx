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
import Login from '../Modal/login';
import { Toast } from '@/utils/toast';

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
  const [isModalOpen, setIsModalOpen] = useState('');
  const closeModal = () => setIsModalOpen('');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  function handleSelect(item: Item) {
    setSelectedItem(item);
  }
  const loginSuccess = () => {
    Toast.cart('Login realizando com sucesso.');
  };
  return (
    <>
      <div className="w-full px-4 h-[88px] flex items-center bg-[#0D102D] lg:h-24 header 2xl:px-[128px]">
        <div className="flex items-center justify-between w-full">
          <div className="relative w-full flex  gap-[0px]">
            <Image
              src="/assets/images/logo.svg"
              width={142}
              height={26}
              alt="Logo"
              className="lg:mr-[32px]"
            />

            <form className="relative search-header hidden 2xl:flex">
              <label htmlFor="email-address" className="sr-only">
                Search
              </label>
              <input
                id="search-address"
                name="search"
                type="search"
                autoComplete="search"
                required
                className="w-[150px] 2xl:w-[290px] h-12 pl-10 rounded-2xl text-[#A3A3A3] bg-[#ffffff00] rounded-2xl outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740]"
                placeholder="Search"
              />
              <button type="submit" className="absolute p-1 left-0 top-0">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_102_6175)">
                    <g clipPath="url(#clip1_102_6175)">
                      <path
                        d="M16.0658 15.0779L18.9211 17.9326L17.9778 18.8759L15.1231 16.0206C14.0609 16.8721 12.7398 17.3352 11.3784 17.3333C8.06642 17.3333 5.37842 14.6453 5.37842 11.3333C5.37842 8.02125 8.06642 5.33325 11.3784 5.33325C14.6904 5.33325 17.3784 8.02125 17.3784 11.3333C17.3804 12.6946 16.9172 14.0157 16.0658 15.0779ZM14.7284 14.5833C15.5745 13.7132 16.047 12.5469 16.0451 11.3333C16.0451 8.75459 13.9564 6.66659 11.3784 6.66659C8.79975 6.66659 6.71175 8.75459 6.71175 11.3333C6.71175 13.9113 8.79975 15.9999 11.3784 15.9999C12.592 16.0018 13.7583 15.5293 14.6284 14.6833L14.7284 14.5833V14.5833Z"
                        fill="#00E4FF"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_102_6175">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.045166)"
                      />
                    </clipPath>
                    <clipPath id="clip1_102_6175">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(4.04517 4)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </form>
          </div>

          <div className="flex ">
            <div>
              <Popover.Group className="flex items-center w-max gap-5">
                <div className="hidden xl:flex gap-1">
                  <a
                    href="#"
                    className="not-italic font-normal text-base leading-[150%] flex items-center text-center text-white xl:px-[14px]"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="not-italic font-normal text-base leading-[150%] flex items-center text-center text-white xl:px-[14px]"
                  >
                    MKT Place
                  </a>
                  {/* <a
                    href="#"
                    className="not-italic font-normal text-base leading-[150%] flex items-center text-center text-white xl:px-[14px]"
                  >
                    Institucional
                  </a>{' '} */}
                  <div className="not-italic font-normal text-base leading-[150%] flex items-center text-center text-white xl:px-[14px]">
                    <Institucional></Institucional>
                  </div>
                  <Popover className="relative m-auto">
                    <Popover.Button
                      onClick={() => window.open('/auth/cadastro/', '_self')}
                      className="ml-2  bg-button-transparent h-[30px] not-italic font-semibold text-xs rounded-full leading-[150%] flex items-center text-center w-auto min-w-max text-[#3C99FC] bg-[#31344C] px-4 py-0"
                    >
                      Área Clientes
                    </Popover.Button>

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
                  </Popover>{' '}
                  <Link
                    href="/auth/cadastro/parceiro"
                    className="ml-2 bg-button-transparent h-[30px] not-italic font-semibold text-xs m-auto rounded-full leading-[150%] flex items-center text-center w-auto min-w-max text-[#00E4FF] bg-[#164092] px-4 py-0"
                  >
                    Área do Parceiro
                  </Link>
                  <div className="px-4 flex gap-2">
                    <button
                      onClick={() => setIsModalOpen('money')}
                      className={`ml-2 h-[37px] not-italic font-semibold text-xs rounded-full leading-[150%] flex items-center text-center align-center self-center w-auto min-w-max px-5 py-0 ${
                        isModalOpen === 'money'
                          ? 'bg-[#00E4FF] text-black'
                          : 'bg-[#31344C] text-[#EEEEEE]'
                      }`}
                    >
                      R$ Real
                    </button>

                    <button
                      onClick={() => setIsModalOpen('language')}
                      className={`ml-2 h-[37px] not-italic font-semibold text-xs rounded-full leading-[150%] flex items-center text-center align-center self-center w-auto min-w-max px-5 py-0 ${
                        isModalOpen === 'language'
                          ? 'bg-[#00E4FF] text-black'
                          : 'bg-[#31344C] text-[#EEEEEE]'
                      }`}
                    >
                      <Image
                        src="/assets/images/icoHeaderPT.svg"
                        height={24}
                        width={24}
                        alt="PT"
                      />
                      <span className="hidden xl:block px-2">Português</span>

                      <span className="px-2 xl:hidden">PT-br</span>
                    </button>
                  </div>
                </div>

                <div className="px-4 flex gap-2">
                  <button className="ml-2 bg-button-transparent h-[40px] not-italic font-semibold text-xs rounded-full leading-[150%] flex items-center text-center w-auto min-w-max text-[#EEEEEE] bg-[#31344C] px-4 py-0">
                    <Image
                      src="/assets/images/icoWallet.svg"
                      height={16}
                      width={16}
                      alt=""
                    />
                  </button>

                  <button
                    // href="/auth/"
                    onClick={() => setIsModalOpen('login')}
                    className="ml-2 bg-button-transparent h-[40px] not-italic font-semibold text-xs rounded-full leading-[150%] flex items-center text-center w-auto min-w-max text-[#EEEEEE] bg-[#31344C] px-4 py-0"
                  >
                    <Image
                      src="/assets/images/icoAccount.svg"
                      height={16}
                      width={16}
                      alt=""
                    />
                  </button>

                  <button
                    onClick={() => setIsModalOpen('cart')}
                    className="ml-2 bg-button-transparent h-[40px] not-italic font-semibold text-xs rounded-full leading-[150%] flex items-center text-center w-auto min-w-max text-[#EEEEEE] bg-[#31344C] px-4 py-0"
                  >
                    <Image
                      src="/assets/images/icoCart.svg"
                      height={16}
                      width={16}
                      alt=""
                    />
                    {playersData?.length > 0 && (
                      <div className="badge ">
                        <span>{playersData?.length}</span>
                      </div>
                    )}
                  </button>
                </div>
              </Popover.Group>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen === 'cart'}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="bg-[#131740] rounded-md p-4 mr-36 mt-4 shadow-md fixed top-20 right-20"
        overlayClassName="bg-opacity-50 fixed inset-0 z-10 "
        preventScroll={false}
      >
        <Cart cartList={playersData} closeModal={closeModal} />
      </Modal>{' '}
      <Modal
        isOpen={isModalOpen === 'login'}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="bg-[#131740] rounded-md p-4 mr-36 mt-4 shadow-md fixed top-20 right-20"
        overlayClassName="bg-opacity-50 fixed inset-0 z-10 "
        preventScroll={false}
      >
        <Login onLoginSuccess={loginSuccess} closeModal={closeModal} />
      </Modal>{' '}
      <Modal
        isOpen={isModalOpen === 'money'}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="bg-[#131740] rounded-md p-4 mr-[38rem] mt-4 shadow-md fixed top-20 right-20"
        overlayClassName="bg-opacity-50 fixed inset-0 z-10 "
        preventScroll={false}
      >
        <div className=" flex flex-col gap-2 pr-[30px]">
          <div className="flex gap-[9px] items-center">
            <span className="text-white font-[400] text-[12px]">€</span>
            <span className="text-white font-[400] text-[14px]">Euro</span>
          </div>
          <div className="flex gap-[9px] items-center">
            <span className="text-white font-[400] text-[12px]">$</span>
            <span className="text-white font-[400] text-[14px]">Dolar</span>
          </div>{' '}
        </div>
      </Modal>
      <Modal
        isOpen={isModalOpen === 'language'}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="bg-[#131740] rounded-md p-4 mr-[30rem] mt-4 shadow-md fixed top-20 right-20"
        overlayClassName="bg-opacity-50 fixed inset-0 z-10 "
        preventScroll={false}
      >
        <div className=" flex flex-col gap-2 pr-[30px]">
          <div className="flex gap-[8px] items-center">
            <Image
              src="/assets/images/country/us.png"
              alt=""
              height={24}
              width={24}
            />{' '}
            <span className="text-white font-[400] text-[14px]">English</span>
          </div>{' '}
        </div>
      </Modal>
    </>
  );
};

export default Header;
