import Image from 'next/image';
import { useState } from 'react';
import { CartProps } from '@/types/marketPlace';

const Cart = (props: CartProps) => {
  const { cartList, closeModal } = props;
  const [players, setPlayers] = useState(cartList);

  const removePlayer = (id: number) => {
    setPlayers(players.filter((player) => player.id !== id));
  };
  const updateQuantity = (id: number, value: number) => {
    setPlayers(
      players.map((player) =>
        player.id === id
          ? { ...player, quantity: player.quantity + value }
          : player
      )
    );
  };

  const calculateTotalPrice = () => {
    return players.reduce(
      (total, player) => total + player.quantity * player.market_price,
      0
    );
  };

  return (
    <>
      {' '}
      {players?.length == 0 ? (
        <div className="flex flex-col items-center gap-4 p-5">
          <Image
            src="/assets/images/empty-cart.svg"
            alt=""
            width={80}
            height={70}
          />{' '}
          <span className="text-white font-[400] text-[12px]">
            O seu carrinho está vazio.
          </span>
          <button className=" bg-button-transparent   rounded-[50px]  min-w-max text-white font-[400] text-[12px] border-2 border-solid border-[#00E4FF] p-4">
            Ir para a Loja
          </button>
        </div>
      ) : (
        <div style={{ width: '500px' }} className=" rounded-lg shadow-lg p-2  ">
          <div className="">
            {players.map((player) => (
              <div
                key={player.id}
                className="flex items-center space-x-4 justify-between mb-6"
              >
                <div className="flex items-center gap-4">
                  <button
                    className="ml-2 bg-button-transparent h-[40px] not-italic font-semibold text-xs rounded-full leading-[150%] flex items-center text-center w-auto min-w-max text-[#EEEEEE] bg-[#31344C] px-4 py-0"
                    onClick={() => removePlayer(player.id)}
                  >
                    <Image
                      src="/assets/images/ic-delete.svg"
                      height={16}
                      width={16}
                      alt=""
                    />
                  </button>
                  <Image
                    src="/assets/images/player.svg"
                    alt={player.name}
                    className="h-106 w-70 -full"
                    width={70}
                    height={106}
                  />
                  <div className="flex flex-col">
                    <span className=" text-white text-[16px] font-bold ">
                      {player.name}
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col justify-center">
                    <div className=" text-white text-[16px] font-[400] mb-3 ">
                      Quantidade
                    </div>
                    <div className="flex items-center space-x-2 m-auto border-[2px] border-solid border-[#00E4FF] rounded-[9px] px-3">
                      <button
                        onClick={() => updateQuantity(player.id, -1)}
                        className=" text-white text-[18px] font-bold "
                      >
                        -
                      </button>
                      <span className="text-white text-[18px] ">
                        {player.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(player.id, 1)}
                        className=" text-white text-[18px] font-bold "
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" text-white text-[16px] font-[400] mb-3 ">
                    Preço
                  </div>
                  <span className="text-[20px] font-[700] text-[#00E4FF]">
                    ${player.market_price}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end flex-col items-end my-10">
            <span className="text-[15px] font-[600] text-white">
              Total geral
            </span>
            <span className="text-[25px] font-[800] text-[#00E4FF] ml-2">
              ${calculateTotalPrice()}
            </span>
          </div>
          {/* <button className="bg-blue-600 text-white font-medium rounded-lg px-4 py-2 mt-4 w-full">
        Submit
      </button>  */}
          <button
            className="h-10 md:h-[40px] text-white text-[16px] font-[600] gradient-4  min-w-[170px]  w-full text-gray-light rounded-2xl"
            style={{
              background:
                'linear-gradient(272.3deg,#4f25cc -.63%,#803eb4 99.75%)',
            }}
          >
            IR PARA O PAGAMENTO
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
