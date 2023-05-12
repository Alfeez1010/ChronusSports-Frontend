import React, { useState } from 'react';
import Quantity from '@/components/reusable/Quantity';
import Image from 'next/image';
import Modal from 'react-modal';
import Login from '@/components/Modal/login';
import { Toast } from '@/utils/toast';

function BannerPage() {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };
  const loginSuccess = () => {
    Toast.cart('Login realizando com sucesso.');
  };
  return (
    <div className="sobre-jogador w-full p-20">
      <div className="img-sobre-jogador ">
        <Image
          alt=""
          src="/assets/players/PLAYER.svg"
          width={100}
          height={100}
        />
      </div>
      <div className="content-sobre-jogador">
        <div className="header-sobre-jogador">
          <div className="header-nome-jogador">
            <div className="valida-chronus-sports">
              <span className="">CHRONUS Sports</span>
              <Image
                width={24}
                height={24}
                alt=""
                src="/assets/players/check.png"
              />
            </div>
            <h2>Nando grana</h2>
            <p>Volume 250</p>
          </div>
          <div className="header-preco-jogador">
            <p className="font-outfit">R$ 365,66</p>
          </div>
        </div>
        <div className="texto-sobre-jogador">
          <p>
            Neque aut veniam consectetur magnam libero, natus eius numquam
            reprehenderit hic at, excepturi repudiandae magni optio odio
            doloribus? Facilisi lobortisal morbi fringilla urna amet sed ipsum.
          </p>
        </div>
        <div className="donos-jogador">
          <div className="dono-jogador">
            <span className="role-dono">Criador</span>
            <div className="verificado-dono">
              <Image
                width={24}
                height={24}
                src="/assets/players/check.png"
                alt=""
              />
              <a href=""> @chronus_sports</a>
            </div>
          </div>
          <div className="dono-jogador">
            <span className="role-dono">Detentor</span>
            <div className="verificado-dono">
              <Image
                width={24}
                height={24}
                src="/assets/players/check.png"
                alt=""
              />
              <a href=""> @chronus_sports</a>
            </div>
          </div>
          <div className="dono-jogador">
            <span className="role-dono">Carbon Free</span>
            <div className="verificado-dono">
              <Image
                width={24}
                height={24}
                src="/assets/players/check.png"
                alt=""
              />
              <a href=""> @chronus_sports</a>
            </div>
          </div>
        </div>
        <div className="interacao-compra-single-jogador">
          <div className="flex  items-center gap-3">
            <div className=" text-white text-[14px] font-[700]  ">
              Quantidade
            </div>
            <div>
              <Quantity
                initialQuantity={quantity}
                onChange={handleQuantityChange}
              />
            </div>
          </div>
          <div className="quantificador mt-5">
            <button onClick={() => setIsModalOpen(true)}>Comprar</button>
          </div>
          <div className="grafico-single-jogador">
            <Image
              width={430}
              height={180}
              alt=""
              src="/assets/players/chart.png"
            />
          </div>
        </div>
      </div>
      {isModalOpen ? (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
          className="bg-[#131740] max-w-[500px]  w-[500px] top-[20%] left-[31%] bottom-auto fixed max-h-[700px] m-auto"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10"
          preventScroll={false}
        >
          <Login onLoginSuccess={loginSuccess} closeModal={closeModal} />
        </Modal>
      ) : (
        ''
      )}
    </div>
  );
}
export default BannerPage;
