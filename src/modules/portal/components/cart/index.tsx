import Image from 'next/image';
import { useState } from 'react';
import { CartProps } from '@/types/marketPlace';
import { cartList } from '@/constants/players';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-modal';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import OrderSuccess from '@/components/Modal/orderSuccess';
import Header from '@/components/Header';
import Footer from '../footer';

const Cart = () => {
  const [players, setPlayers] = useState(cartList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

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
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Campo obrigatório'),
    cardNumber: Yup.string()
      .required('Campo obrigatório')
      .matches(/^[0-9]+$/, 'Digite apenas números'),
    expiryDate: Yup.string()
      .required('Campo obrigatório')
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Data inválida'),
    cvcCode: Yup.string()
      .required('Campo obrigatório')
      .matches(/^[0-9]{3,4}$/, 'Código inválido'),
    country: Yup.string().required('Campo obrigatório'),
  });
  const countries = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'mx', label: 'Mexico' },
  ];

  return (
    <div>
      {' '}
      <Header />
      <Formik
        initialValues={{
          username: '',
          cardNumber: '',
          expiryDate: '',
          cvcCode: '',
          country: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setIsModalOpen(true);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="bg-[#0D0035] rounded-lg shadow-lg  lg:px-[330px] py-[50px]  ">
              <h2 className="text-white text-[25px] font-[800] uppercase my-5">
                Itens selecionados
              </h2>
              <div className="">
                {players.map((player) => (
                  <div
                    key={player.id}
                    className="flex items-center space-x-4 justify-between mb-6 "
                  >
                    <div className=" flex items-center gap-10   ">
                      <div className="bg-[#131740] ">
                        <Image
                          src="/assets/images/player.svg"
                          alt={player.name}
                          className="h-150 w-90 -full m-[30px] "
                          width={80}
                          height={140}
                        />
                      </div>
                      <div className="flex flex-col lg:w-[50%]">
                        <span className=" text-white text-[23px] font-[600]">
                          {player.name}
                        </span>
                        <span className=" text-white text-[17px] font-[700]">
                          Nando Grana Raro
                        </span>
                      </div>
                    </div>

                    <div className=" lg:w-[20%] ">
                      <div className="flex flex-col justify-center">
                        <div className=" text-white text-[16px] font-[400] mb-3 self-center ">
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
                      <div className=" flex justify-end">
                        <button
                          className="ml-2 bg-button-transparent h-[40px] not-italic font-semibold text-xs rounded-full leading-[150%] flex items-center  w-auto min-w-max text-[#EEEEEE] bg-[#31344C] px-4 py-0"
                          onClick={() => removePlayer(player.id)}
                        >
                          <Image
                            src="/assets/images/ic-delete.svg"
                            height={16}
                            width={16}
                            alt=""
                          />
                        </button>
                      </div>
                      <div className=" text-white text-[16px] font-[400]  text-end">
                        Preço
                      </div>
                      <span className="text-[27px] font-[800] text-[#00E4FF] uppercase">
                        R$ {player.market_price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full flex justify-between">
                <div className=" w-[80%]">
                  <h5 className=" text-white text-[29px] uppercase font-[800] mb-5">
                    Informações de pagamento
                  </h5>
                  <div className="lg:w-[50%]">
                    <span className="text-white text-[16px] font-[400] ">
                      Dados do cartão
                    </span>
                    <div>
                      <div className="col-span-full pb-[10px] pt-5 relative">
                        <Field
                          type="text"
                          name="username"
                          placeholder="Nome do Tituar do Cartão"
                          className="block w-full text-white bg-transparent border-[1px] border-solid border-gray-300 rounded-[16px] py-3 pl-10 pr-4 mt-1"
                        />
                        <div className="text-[14px] font-[400] text-gray-500 mt-2">
                          Igual a como está no cartão
                        </div>
                        {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pb-9">
                        <Image
                          src="/assets/players/icoUser.svg"
                          className="m-1 "
                          alt=""
                          width={14}
                          height={17}
                        />
                      </div> */}
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="text-red-500 "
                        />
                      </div>
                      <div className="col-span-full pb-[10px]">
                        <Field
                          type="text"
                          name="cardNumber"
                          placeholder="5114  7703 2435 0040"
                          className="block w-full text-white bg-transparent border-[1px] border-solid border-gray-300 rounded-[16px] py-3 pl-10 pr-4 mt-1"
                        />
                        <ErrorMessage
                          name="cardNumber"
                          component="div"
                          className="text-red-500"
                        />
                        <div className="text-[14px] font-[400] text-gray-500 mt-2">
                          Número do cartão
                        </div>
                      </div>
                      <div className="col-span-full pb-[10px] flex gap-4">
                        <div>
                          <Field
                            type="text"
                            name="expiryDate"
                            placeholder="05/31"
                            className="block w-full text-white bg-transparent border-[1px] border-solid border-gray-300 rounded-[16px] py-3 pl-10 pr-4 mt-1"
                          />
                          <ErrorMessage
                            name="expiryDate"
                            component="div"
                            className="text-red-500"
                          />
                          <div className="text-[14px] font-[400] text-gray-500 mt-2">
                            Data de validade
                          </div>
                        </div>
                        <div className="">
                          <Field
                            type="text"
                            name="cvcCode"
                            placeholder="111"
                            className="block w-full text-white bg-transparent border-[1px] border-solid border-gray-300 rounded-[16px] py-3 pl-10 pr-4 mt-1"
                          />
                          <ErrorMessage
                            name="cvcCode"
                            component="div"
                            className="text-red-500"
                          />
                          <div className="text-[14px] font-[400] text-gray-500 mt-2">
                            Código de segurança
                          </div>
                        </div>
                      </div>
                      <div className="col-span-full pb-4">
                        <Field
                          as="select"
                          name="country"
                          id="country"
                          className="input-field  w-full text-white bg-transparent border-[1px] border-solid border-gray-300 rounded-[16px] py-3 px-4 mt-1"
                        >
                          <option className="bg-[#0D0035]" disabled value="">
                            Select country
                          </option>
                          {countries.map(({ value, label }) => (
                            <option
                              className="bg-[#0D0035]"
                              key={value}
                              value={value}
                            >
                              {label}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          name="country"
                          component="div"
                          className="text-red-500"
                        />
                        <div className="text-[14px] font-[400] text-gray-500 mt-2">
                          País
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{' '}
                <div className="flex  flex-col items-end my-10 ">
                  <span className="text-[15px] font-[600] text-white">
                    Total geral
                  </span>
                  <span className="text-[25px] font-[800] text-[#00E4FF] ml-2">
                    ${calculateTotalPrice()}
                  </span>
                </div>
              </div>
              <div className=" flex flex-end justify-end">
                <div className=" w-[80%] flex flex-end   text-end">
                  <div className="w-[50%] text-[25px] font-[600] self-center text-white p-3">
                    Total da compra
                  </div>
                  <div className="w-[50%] text-[40px] font-[800] text-[#4ADF3A]  p-3">
                    R$ 3400,66
                  </div>
                </div>
              </div>
              <div className=" flex w-full gap-3">
                <button className="h-10 md:h-[40px] text-white text-[14px] font-[700] gradient-4 p-2 bg-transparent min-w-[170px]  w-[30%] text-gray-light border-[1px] border-solid border-[#803eb4] rounded-2xl">
                  CONTINUAR COMPRANDO
                </button>
                <button
                  type="submit"
                  className="h-10 md:h-[40px] text-white text-[14px] font-[700] gradient-4  min-w-[170px]  w-[70%] text-gray-light rounded-2xl"
                  style={{
                    background:
                      'linear-gradient(272.3deg,#4f25cc -.63%,#803eb4 99.75%)',
                  }}
                >
                  FAZER PAGAMENTO
                </button>
              </div>
              {isModalOpen ? (
                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={closeModal}
                  shouldCloseOnOverlayClick={true}
                  ariaHideApp={false}
                  className="bg-[#131740] max-w-[700px]  w-[700px] top-[20%] left-[31%] bottom-auto fixed max-h-[700px] m-auto"
                  overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10"
                  preventScroll={false}
                >
                  {' '}
                  <OrderSuccess />
                </Modal>
              ) : (
                ''
              )}
            </div>
          </Form>
        )}
      </Formik>{' '}
      <Footer />
    </div>
  );
};

export default Cart;
