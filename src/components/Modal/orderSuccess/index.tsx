import React from 'react';

function OrderSuccess() {
  return (
    <div className="flex flex-col my-[50px] mx-[150px] gap-10">
      <span className="text-[30px] font-[900] text-[#00E4FF] uppercase text-center">
        Compra realizada com sucesso
      </span>{' '}
      <span className="text-[15px] font-[400] text-white  text-center">
        Agora você receberá um e-mail com todas as informações sobre a compra
        realizada e os seus NFT’s.
      </span>
      <span className="text-[15px] font-[400] text-white text-center">
        Em caso de dúvidas ou reclamações entre em contato através do e-mail:
        <a
          href="mailto:suporte@moohtech.com"
          className="text-blue-500 hover:text-blue-700"
        >
          suporte@moohtech.com
        </a>
      </span>
      <hr className="h-[1px] bg-[#A3A3A3] mt-9 " />{' '}
    </div>
  );
}

export default OrderSuccess;
