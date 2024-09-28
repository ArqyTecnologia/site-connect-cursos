"use client"

import Image from "next/image";
import Logo from "../../assets/logo-connect.png"
import Link from "next/link";
import router from "next/router";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const router = useRouter();
  const pathname = usePathname()

  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <>
      <div className="flex justify-between items-center py-6 px-6 lg:px-20 text-blue-400 font-bold text-sm">
        <Link href="/" legacyBehavior>
          <Image
            src={Logo}
            alt="Logo do Connect Cursos"
            width={100}
            height={100}
            quality={100} />
        </Link>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-blue-400"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-blue-400"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-blue-400"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              {/* toggle class based on isNavOpen state */}
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <li className={`my-auto uppercase border-b border-gray-400 hover:text-blue-400 ${pathname == "/" ? "text-blue-400" : "text-blue-900"}`} >
                  <Link href="/">Inicio</Link>
                </li>
                <li className={`my-auto uppercase border-b border-gray-400 hover:text-blue-400 ${pathname == "/about" ? "text-blue-400" : "text-blue-900"}`} >
                  <Link href="/about">Quem somos</Link>
                </li>
                <li className={`my-auto uppercase border-b border-gray-400 hover:text-blue-400 ${pathname == "/courses" ? "text-blue-400" : "text-blue-900"}`} >
                  <Link href="/courses">Serviços ofertados</Link>
                </li>
                <li className={`my-auto uppercase border-b border-gray-400 hover:text-blue-400 ${pathname == "/approved" ? "text-blue-400" : "text-blue-900"}`} >
                  <Link href="/approved">Aprovados</Link>
                </li>

              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex font-bold text-sm items-center ">
            <li className="my-auto uppercase hover:text-brand-darkblue" >
              <Link href="/" legacyBehavior className={`${pathname == "/" ? "text-blue-400" : "text-blue-900"}`}>Inicio</Link>
            </li>
            <li className={`my-auto uppercase  hover:text-blue-400 ${pathname == "/about" ? "text-blue-400" : "text-blue-900"}`} >
              <Link href="/about" legacyBehavior>Quem somos</Link>
            </li>
            <li className={`my-auto uppercase hover:text-blue-400 ${pathname == "/courses" ? "text-blue-400" : "text-blue-900"}`} >
              
              <Link href="/courses" legacyBehavior>Serviços ofertados</Link>
            </li>
            <li className={`my-auto uppercase hover:text-blue-400 ${pathname == "/approved" ? "text-blue-400" : "text-blue-900"}`} >
              <Link href="/approved" legacyBehavior>Aprovados</Link>
            </li>
          </ul>
        </nav><style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
      </div >
    </>
  );
}