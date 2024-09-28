import Image from "next/image";
import logo from "../../assets/logo-connect.png"

import { Mail, MapPinned, Phone } from "lucide-react";
// import { MapPin } from "@phosphor-icons/react/dist/ssr";
// import { Envelope, InstagramLogo, Phone } from "@phosphor-icons/react";

import whatsapp from "../../assets/whatssapp.svg"

export function Footer() {
    return (
        <>
            <footer className="bg-[#1A1717] dark:bg-gray-900 ">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between ">
                        <div className="mb-6 md:mb-0 text-white">
                            <a href="#" className="md:flex items-center ">
                                <Image src={logo} className="" alt="Logo Connect Cursos" />
                                <span className="self-center text-2xl font-semibold text-white-200 whitespace-nowrap dark:text-white">Connect Cursos</span>
                            </a>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 sm:grid-cols-1 ">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white-200 uppercase dark:text-white">Endereço</h2>

                                <ul className="text-gray-200 dark:text-gray-400 font-medium">

                                    <li className="mb-2 flex items-center gap-3">
                                        <MapPinned size={16} />
                                        <a href="#" className="hover:underline "> Rua Mestre Eufrasio, S/N <br></br> Bairro das Flores, Brumado/BA </a>
                                    </li>
                                </ul>
                                <ul className="text-gray-200 dark:text-gray-400 font-medium">
                                    <li className="mb-2 flex items-center gap-3">
                                    <Phone size={16} />
                                        <a href="#" className="hover:underline ">connectcursosbdo@gmail.com</a>
                                    </li>
                                    <li className="mb-2 flex items-center gap-3">
                                    <Mail size={16} />
                                        <a href="#" className="hover:underline">(77) 98155-1759</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">Links Úteis</h2>
                                <ul className="text-gray-200 dark:text-gray-400 font-medium">
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline">Inicio</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline">Quem somos</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline">Serviços</a>
                                    </li>
                                    <li >
                                        <a href="#" className="hover:underline">Aprovados</a>
                                    </li>
                                </ul>
                            </div>


                        </div>

                    </div>

                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-300 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Connect Cursos™</a>. Todos os direitos reservados.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="#" className="text-gray-300 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-gray-900 dark:hover:text-white ms-5">
                            <Mail size={16} />
                                <span className="sr-only">Instagram page</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Button do Whatsapp */}

            <a
                href="https://api.whatsapp.com/send?phone=5577981551759&text=Quero%20saber%20mais%20%20!"
                className="fixed bottom-8 right-4 -z-0"
                target='_blank'

            >
                <Image
                    src={whatsapp}
                    alt='Botao WhatsApp'
                    className="max-w-20 transition-transform hover:scale-110"
                />
                <span className="hidden absolute w-16 top-0 -left-36 p-1 border rounded text-center opacity-0 transition-colors bg-black-500 text-white-200 hover:visible ">
                    Fale concosco!
                </span>

            </a>
        </>

    )

}