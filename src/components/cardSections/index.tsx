import React, { useState } from 'react';
import PlayerCard from '../reusable/PlayerCard';
import { currentPost } from '@/constants/players';
import { Player, PlayersProps } from '@/types/marketPlace';

function CardSections() {
  const [cartPlayers, setCartPlayers] = useState<Player[]>([]);
  const [isClicked, setIsClicked] = useState('');
  const addToCart = (player: Player) => {
    if (cartPlayers.includes(player)) {
      // Player is already in the cart, remove it
      //   setCartPlayers(cartPlayers.filter((p) => p !== player));
      //   onAddToCart(player, cartPlayers);
    } else {
      // Add the player to the cart
      setCartPlayers([...cartPlayers, player]);
      //   Toast.cart('Nando Grana adicionado ao carrinho com sucesso!');
      //   onAddToCart(player, cartPlayers);
    }
  };
  const isPlayerInCart = (player: Player) => cartPlayers.includes(player);

  return (
    <div className="mx-[15rem] mt-[10rem]">
      <span className=" px-2 py-1 flex items-center m-5 text-[50px] font-[800] text-white justify-center">
        CONFIRA MAIS OPÇÕES
      </span>
      <div className="flex flex-row flex-wrap justify-between">
        {currentPost.map((player, index) => (
          <PlayerCard
            player={player}
            addToCart={addToCart}
            isPlayerInCart={isPlayerInCart}
            key={index}
          />
        ))}
      </div>
      <div className="max-w-[300px] max-h-[260px] ml-20 mt-6 flex flex-col gap-5">
        <span className="text-[16px] font-[600] text-white">
          Filtros para mais opções
        </span>
        <div className=" flex flex-row  gap-5">
          <button
            onClick={() => {
              setIsClicked('Especiais');
            }}
            className={`text-[13px] font-[500] text-white px-5 py-3 border-[1px] border-solid border-[#363A5D] rounded-[9px] ${
              isClicked === 'Especiais' ? 'bg-[#8358FF]' : 'bg-[#131740]'
            }`}
          >
            Especiais do Atleta
          </button>
          <button
            onClick={() => {
              setIsClicked('Maiorvalor');
            }}
            className={`text-[13px] font-[500] text-white px-5 py-3 border-[1px] border-solid border-[#363A5D] rounded-[9px] ${
              isClicked === 'Maiorvalor' ? 'bg-[#8358FF]' : 'bg-[#131740]'
            }`}
          >
            Maior valor
          </button>
        </div>
        <div className=" flex flex-row  gap-2">
          <button
            onClick={() => {
              setIsClicked('Menor valor');
            }}
            className={`text-[13px] font-[500] text-white px-5 py-3 border-[1px] border-solid border-[#363A5D] rounded-[9px] ${
              isClicked === 'Menor valor' ? 'bg-[#8358FF]' : 'bg-[#131740]'
            }`}
          >
            Menor valor
          </button>
          <button
            onClick={() => {
              setIsClicked('Maisvendidos');
            }}
            className={`text-[13px] font-[500] text-white px-5 py-3 border-[1px] border-solid border-[#363A5D] rounded-[9px] ${
              isClicked === 'Maisvendidos' ? 'bg-[#8358FF]' : 'bg-[#131740]'
            }`}
          >
            Mais vendidos
          </button>
        </div>
        <div className=" flex flex-row  gap-2">
          <button
            onClick={() => {
              setIsClicked('bluechips');
            }}
            className={`text-[13px] font-[500] text-white px-5 py-3 border-[1px] border-solid border-[#363A5D] rounded-[9px] ${
              isClicked === 'bluechips' ? 'bg-[#8358FF]' : 'bg-[#131740]'
            }`}
          >
            Blue Chips
          </button>
          <button
            onClick={() => {
              setIsClicked('MaisRaros');
            }}
            className={`text-[13px] font-[500] text-white px-5 py-3 border-[1px] border-solid border-[#363A5D] rounded-[9px] ${
              isClicked === 'MaisRaros' ? 'bg-[#8358FF]' : 'bg-[#131740]'
            }`}
          >
            Mais Raros
          </button>
          <button
            onClick={() => {
              setIsClicked('Lançamentos');
            }}
            className={`text-[13px] font-[500] text-white px-5 py-3 border-[1px] border-solid border-[#363A5D] rounded-[9px] ${
              isClicked === 'Lançamentos' ? 'bg-[#8358FF]' : 'bg-[#131740]'
            }`}
          >
            Lançamentos
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardSections;
