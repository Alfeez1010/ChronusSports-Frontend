import Image from "next/image";
import Link from "next/link";

const navigation = {
    browser: [
        { name: 'MKT Place', href: '#' },
    ],
    institutional: [
        { name: 'Sobre', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Código de Conduta', href: '#' },
        { name: 'Chronus Sports', href: '#' },
    ],
    myaccount: [
        { name: 'Área do Cliente', href: '#' },
        { name: 'Área do Parceiro', href: '#' },
    ],
    social: [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/MoohTech/',
            icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
                <svg fill="#fff" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/moohtech',
            icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
                <svg fill="#fff" viewBox="0 0 24 24" {...props}>
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
        },
        {
            name: 'Linkedin',
            href: 'https://www.linkedin.com/company/mooh-/mycompany/?viewAsMember=true',
            icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                fill="none"
                {...props}
              >
                <path
                  fill="#fff"
                  d="M3.906 17.82V6.142H.273v11.68h3.633ZM2.07 4.58c1.172 0 2.11-.977 2.11-2.149 0-1.133-.938-2.07-2.11-2.07C.938.36 0 1.297 0 2.43 0 3.602.938 4.58 2.07 4.58ZM17.5 17.82v-6.406c0-3.125-.703-5.547-4.375-5.547-1.758 0-2.93.976-3.438 1.875h-.039V6.14H6.172v11.68h3.633V12.04c0-1.524.273-2.97 2.148-2.97s1.914 1.72 1.914 3.087v5.664H17.5Z"
                />
              </svg>
            ),
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/mooh.tech/',
            icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
                <svg fill="#fff" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'TikTok',
            href: 'https://www.tiktok.com/@moohtech',
            icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={25}
                fill="none"
                {...props}
              >
                <path
                  fill="#fff"
                  d="M20.5 10.563V7.165h-.04a4.56 4.56 0 0 1-2.577-.782 4.75 4.75 0 0 1-2.11-3.125c-.078-.273-.078-.547-.078-.82V2.36h-3.437v13.672a2.951 2.951 0 0 1-2.93 2.93 2.951 2.951 0 0 1-2.93-2.93 2.951 2.951 0 0 1 2.93-2.93c.313 0 .586.04.899.156V9.743c-.313-.04-.586-.078-.899-.078C5.813 9.665 3 12.516 3 16.032a6.302 6.302 0 0 0 6.328 6.328c3.516 0 6.367-2.813 6.367-6.328V9.04c1.328.976 2.97 1.523 4.766 1.523h.039Z"
                />
              </svg>
            ),
        },
    ],
}

const Footer = () => {

    return <>
        <footer className="bg-[#0D102D]" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 flex flex-col">
                <div className="flex xl:grid-cols-3 xl:gap-8 sm:justify-between flex-wrap">
                    <div className="space-y-8 max-w-[420px]">
                        <Image
                            className="w-[164px] h-auto"
                            src='/assets/images/logo.svg'
                            height={45}
                            width={163}
                            alt="Company name"
                        />
                        <p className="not-italic font-normal text-base leading-[150%] text-[#A1A2B3]">
                            CHRONUS Sports é a sua chance de possuir, vender e negociar NFT’s colecionáveis digitais oficiais dos melhores atletas profissionais do mundo.
                        </p>
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400" target="_blank">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16  xl:mt-0 flex flex-wrap flex-col sm:flex-row w-max">
                        <div className="">
                            <div className="mt-10 md:mt-0  min-w-[170px] w-[100%]">
                                <h3 className="not-italic font-normal text-base leading-[150%] uppercase text-[#00E4FF]">NAVEGAR</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.browser.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="not-italic font-normal text-base leading-[150%] flex items-center text-[#A1A2B3]">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <div className="mt-10 md:mt-0 min-w-[170px] w-[100%]">
                                <h3 className="not-italic font-normal text-base leading-[150%] uppercase text-[#00E4FF]">INSTITUCIONAL</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.institutional.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="not-italic font-normal text-base leading-[150%] flex items-center text-[#A1A2B3]">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <div className="mt-10 md:mt-0 min-w-[170px] w-[100%]">
                                <h3 className="not-italic font-normal text-base leading-[150%] uppercase text-[#00E4FF]">MINHA CONTA</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.myaccount.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="not-italic font-normal text-base leading-[150%] flex items-center text-[#A1A2B3]">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex sm:justify-between flex-wrap justify-center">
                    <p className="text-xs leading-5 text-gray-400">© 2023 CHRONUS Sports - Powered By <span className="text-[#00e4ff]">Mooh!Tech</span></p>
                    <p className="text-xs leading-5 text-gray-400">
                        <Link target="_blank" href="https://www.moohtech.com/chronus/sports/termsofuse/pt-BR/termsofuse_CHRONUS_Sports_PT-br.pdf" className="pr-4 py-0 hover:text-[#00e4ff]">Termos e Condições</Link>
                        <Link target="_blank" href="https://www.moohtech.com/chronus/sports/privacypolicy/pt-BR/privacypolicy_CHRONUS_Sports_pt-BR.pdf" className="py-0 hover:text-[#00e4ff]">Política de  privacidade</Link>
                    </p>
                </div>
            </div>
        </footer>
    </>
}

export default Footer;