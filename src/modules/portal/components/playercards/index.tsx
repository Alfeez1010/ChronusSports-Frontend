import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Select from '@/components/form/select';
import { Toast } from '@/utils/toast';
import { Player, PlayersProps } from '@/types/marketPlace';
import { playersData } from '@/constants/players';
import Pagination from '@/utils/pagination';
import PlayerCard from '@/components/reusable/PlayerCard';

function Players(props: PlayersProps) {
  const [cartPlayers, setCartPlayers] = useState<Player[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState(8);

  const { onAddToCart } = props;

  const items = [
    { id: 1, name: 'Mais populares' },
    { id: 2, name: 'Populares' },
  ];
  const addToCart = (player: Player) => {
    if (cartPlayers.includes(player)) {
      // Player is already in the cart, remove it
      setCartPlayers(cartPlayers.filter((p) => p !== player));
      onAddToCart(player, cartPlayers);
    } else {
      // Add the player to the cart
      setCartPlayers([...cartPlayers, player]);
      Toast.cart('Nando Grana adicionado ao carrinho com sucesso!');
      onAddToCart(player, cartPlayers);
    }
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const filteredPlayers = playersData.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const isPlayerInCart = (player: Player) => cartPlayers.includes(player);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPlayers.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);
  const jumpToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="">
      <div className="flex flex-row w-full justify-between pb-5">
        <div className="relative  flex ">
          <form className="relative search-header  2xl:flex">
            <label htmlFor="search-address" className="sr-only">
              Search
            </label>
            <input
              id="search-address"
              name="search"
              type="search"
              autoComplete="search"
              required
              className="w-[190px] 2xl:w-[400px] h-12 pl-10 rounded-2xl text-[#A3A3A3] bg-[#211546] rounded-2xl outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740]"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button type="submit" className="absolute left-1.5 top-1.5">
              <svg
                width="23"
                height="22"
                viewBox="0 0 25 24"
                fill="#8c8c8c" // Updated fill color to grey
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_102_6175)">
                  <g clipPath="url(#clip1_102_6175)">
                    <path d="M16.0658 15.0779L18.9211 17.9326L17.9778 18.8759L15.1231 16.0206C14.0609 16.8721 12.7398 17.3352 11.3784 17.3333C8.06642 17.3333 5.37842 14.6453 5.37842 11.3333C5.37842 8.02125 8.06642 5.33325 11.3784 5.33325C14.6904 5.33325 17.3784 8.02125 17.3784 11.3333C17.3804 12.6946 16.9172 14.0157 16.0658 15.0779ZM14.7284 14.5833C15.5745 13.7132 16.047 12.5469 16.0451 11.3333C16.0451 8.75459 13.9564 6.66659 11.3784 6.66659C8.79975 6.66659 6.71175 8.75459 6.71175 11.3333C6.71175 13.9113 8.79975 15.9999 11.3784 15.9999C12.592 16.0018 13.7583 15.5293 14.6284 14.6833L14.7284 14.5833V14.5833Z" />
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
        <div className="col-span-full flex flex-row">
          <div className=" font-medium text-white text-[12px]  px-2 py-1 flex items-center">
            Ordernar por:
          </div>
          <div className="col-span-full ">
            <Select items={items} title="" key="legalGuard" data="" />
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between">
        {filteredPlayers.length < 1 ? (
          <div className="   px-2 py-1 flex items-center m-auto text-[23px] font-[700] text-[#00E4FF] ">
            No Results Found
          </div>
        ) : (
          <>
            {currentPosts.map((player, index) => (
              <PlayerCard
                player={player}
                addToCart={addToCart}
                isPlayerInCart={isPlayerInCart}
                key={index}
              />
            ))}
          </>
        )}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={playersData.length}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        currentPage={currentPage}
        jumpToPage={jumpToPage} // pass the jumpToPage function down as a prop
      />
    </div>
  );
}

export default Players;
