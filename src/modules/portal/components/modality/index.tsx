import Image from "next/image";
import Link from "next/link";
import React, { MutableRefObject } from "react";

const modalities = [
    {
        title: 'Basquete',
        image: '/assets/images/modality-basquete.png',
        width: 100,
        height: 200,
    },    
    {
        title: 'Futebol',
        image: '/assets/images/modality-futebol.png',
        width: 100,
        height: 200,
    },
    {
        title: 'Futsal',
        image: '/assets/images/modality-futsal.png',
        width: 100,
        height: 200,
    },
    {
        title: 'Ginástica Olímpica',
        image: '/assets/images/modality-ginastica.png',
        width: 146,
        height: 89,
    },
    {
        title: 'Natação',
        image: '/assets/images/modality-natacao.png',
        width: 100,
        height: 200,
    },
    {
        title: 'Vôlei',
        image: '/assets/images/modality-volei.png',
        width: 100,
        height: 200,
    },
]

const Modality = () => {
    const carrosel: MutableRefObject<HTMLUListElement | null | any | undefined> =
        React.useRef();

    const next = (): void => {
        carrosel.current.scrollLeft += 289;
    };
    const before = (): void => {
        carrosel.current.scrollLeft -= 289;
    };

    return (
        <div className="sm:pt-[119px]">
            <div className="mx-auto max-w-7xl lg:px-8 relative sm:px-0 bg-[url(/assets/images/modality-bg.png)] bg-[50%] bg-no-repeat flex items-center justify-center gap-5 flex-col" >
                <div className="relative isolate overflow-hidden sm:rounded-3xl">
                    <h2 className="font-black text-base flex  text-center sm:text-start justify-center leading-[150%] mb-0 pt-16  sm:pt-0 sm:text-[58px] tracking-[0.06em] uppercase text-[#EEEEEE] sm:mb-[32px]">
                        MODALIDADES
                    </h2>
                </div>

                <div className="w-[100%] max-w-[930px] justify-center flex items-center m-auto pb-0 px-0">
                    <div className="flex justify-end items-center flex-row">
                        <button className="cursor-pointer absolute p-1.5 border-[unset] left-0">
                            <Image
                                src="/assets/images/icoPrevius.svg"
                                alt="" width={24} height={24}
                                onClick={() => before()}
                            />
                        </button>

                        <button className="cursor-pointer absolute p-1.5 border-[unset] right-0" onClick={() => next()}>
                            <Image src="/assets/images/icoNext.svg" alt="" width={24} height={24} />
                        </button>
                    </div>
                    <div className="flex overflow-x-visible overflow-y-hidden w-full relative flex-nowrap flex-row scroll-smooth min-h-[450px]  m-auto" ref={carrosel}>
                        {modalities.map((items, index) => (
                            <div key={index} className="flex flex-col items-center justify-center min-w-[77px] m-[60px]">
                                <Image src={items.image} height={items.height} width={items.width} alt="" />
                                <h3 className="font-normal text-base flex items-end text-center text-white pt-[22px]" >{items.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Modality;