// "use client";
import type { Metadata } from "next";
import "../styles/global.css"
import { HeaderTwo} from "../components/Header/index";
import Head from "next/head";
import { ThemeProvider } from "@material-tailwind/react";

import { Archivo } from 'next/font/google'
import { Header } from "../components/Header/Head";
import { Footer } from "../components/Footer/Footer";

// import { ThemeProvider, Carousel } from "@material-tailwind/react";
 
// export { ThemeProvider, Carousel };

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Connect Cursos",
  description: "Seu futuro começa aqui!",
  
};

export default function RootLayout({
  children,
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={archivo.className}>
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;800&family=Roboto:ital,wght@0,400;0,700;0,900;1,400&family=Sora:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="app/icon.svg" sizes="any" />
      </Head>
      <body>
        
          <Header/>
          {children}
          <Footer/>
        
          
                
      </body>
    </html>
  );
}
