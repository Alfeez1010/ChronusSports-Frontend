import React, { useState } from 'react';
import Filter from '../../components/filter';
import Header from '@/components/Header';
import Footer from '../../components/footer';
import Players from '../../components/playercards';
import { Player } from '@/types/marketPlace';
function MarketPlacePage() {
  const [cartList, setCartList] = useState<Player[]>([]);
  const handleAddToCart = (player: Player, cart: Player[]) => {
    setCartList(cart);
  };
  console.log('Add to cart', cartList);
  return (
    <div className="bg-[#0D0035]">
      <Header />
      <div className=" flex flex-row flex-wrap mt-[30px] gap-5 w-full">
        <div className=" max-[900px]:w-full w-[30%]">
          <Filter />
        </div>
        <div className=" max-[900px]:w-full  max-[900px]:m-[50px] min-[900px]:w-[65%] ">
          <Players onAddToCart={handleAddToCart} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MarketPlacePage;
