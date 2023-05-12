import Image from 'next/image';
import React from 'react';
import { PaginationProps } from '@/types/marketPlace';

const Pagination: React.FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  paginateFront,
  paginateBack,
  currentPage,
  jumpToPage, // add jumpToPage to destructured props
}) => {
  const pages = Math.ceil(totalPosts / 8);
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="py-2 flex justify-end mt-5">
      <nav className="block"></nav>
      <div>
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <a
            onClick={() => {
              if (currentPage !== 1) {
                paginateBack();
              }
            }}
            href="#"
            className={`ml-2 bg-button-transparent h-[40px]  w-[40px] not-italic font-semibold text-xs rounded-full leading-[150%] flex items-center text-center w-auto min-w-max text-[#EEEEEE] bg-[#31344C] px-4 py-0 ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <Image
              src="/assets/images/vector.svg"
              height={10}
              width={7}
              alt=""
              className="m-auto"
            />
          </a>
          {pageNumbers.map((number) => (
            <a
              onClick={() => {
                jumpToPage(number);
              }}
              key={number}
              className={`ml-2  not-italic font-[400] text-[14px]  leading-[150%] flex items-center cursor-pointer text-center w-auto min-w-max   px-4 py-0 ${
                currentPage === number ? 'text-[#00E4FF]' : 'text-[#A3A3A3]'
              }`}
            >
              {number}
            </a>
          ))}
          <a
            onClick={() => {
              if (currentPage !== pages) {
                paginateFront();
              }
            }}
            href="#"
            className={`ml-2 bg-button-transparent h-[40px]  w-[40px] not-italic font-semibold text-xs rounded-full leading-[150%] flex items-center text-center w-auto min-w-max text-[#EEEEEE] bg-[#31344C] px-4 py-0 ${
              currentPage === pages ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <Image
              src="/assets/players/vector.svg"
              height={10}
              width={7}
              className="m-auto"
              alt=""
            />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
