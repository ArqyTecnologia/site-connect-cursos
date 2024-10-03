import Image from "next/image";
import styles from "./page.module.css";
import { getDataHome } from "../utils/actions/get-data";
import { HomeProps } from "../utils/home.type";
import { Head } from "next/document";
import Link from "next/link";
import { ArrowRight, ChalkboardSimple, Student, Trophy } from "@phosphor-icons/react";
import { Hanking } from "../components/Hanking";
import { ArrowRightLeft, MoveRight } from "lucide-react";
import { CarouselDefault } from "../components/Carousel/Carousel";
import { ThemeProvider } from "@material-tailwind/react";
import { CarouselDemo } from "../components/CarouselAlternative/page";

export default async function Home() {

  const { object }: HomeProps = await getDataHome();

  // console.log(JSON.stringify(object, null, 2));
  return (
    // <ThemeProvider>
    <>
      <main className="w-full h-full flex flex-col mx-auto bg-100 font-sans text-black-500">
        {/* <CarouselDefault   />   */}
        <CarouselDemo/>
        {/* corrig problemas com materail css */}

        <Hanking
          quant_aluno={object.metadata.quantidade_aluno}
          anos_educacao={object.metadata.anos_educacao}
          quant_aprovados={object.metadata.quantidade_aprovado}
        />

        <div className="flex flex-col gap-8 m-10 my-4 px-10 py-5">
          {/* Resumo do sobre */}
          <div className="md:flex items-center justify-between md:gap-6 md:py-2">
            <img
              src={object.metadata.sobre.imagem_sobre.url}
              alt=""
              width={500}
              height={500}
              className="object-cover"
            />
            <div className="flex flex-col justify-between gap-5">
              <h1 className="font-bold text-xl uppercase text-[#5185D5]">
                {object.metadata.sobre.titulo_sobre}
              </h1>
              <p className="text-justify">
                {object.metadata.sobre.texto_sobre}
              </p>
              <div >
                <Link
                  href="https://api.whatsapp.com/send?phone=5577981551759"
                  // href="/about"
                  target="_blank"
                  className="flex w-64 items-center justify-center gap-5 bg-blue-600 text-white-200 p-2 border rounded-full "
                >
                  Conheça-nos melhor
                  <MoveRight size={28} />
                </Link>
              </div>
            </div>
          </div>

          {/* Resumo do Enem */}
          <div className="md:flex items-center justify-between md:gap-6 md:py-2 ">
          <img
              src={object.metadata.aprovado.imagem_aprovado.url}
              alt="Professora preta, sorrindo com um aluno preto, sorrindo e uma aluna branca sorrindo ao lado dela"
              width={500}
              height={500}
              className="object-cover "
            />
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-xl  uppercase text-[#5185D5]">
                {object.metadata.aprovado.titulo_aprovado}
              </h1>
              <p className="text-justify ">
                {object.metadata.aprovado.texto_aprovado}
              </p>
              <Link
                href={object.metadata.aprovado.link_botao}

                //href="/approved"
                target="_blank"
                className="flex w-72 items-center justify-center gap-5 bg-blue-600 text-white-200 p-2  border rounded-full"
              >
                {object.metadata.aprovado.titulo_botao}
                <MoveRight size={28} />
              </Link>
            </div>

            
          </div>

          {/* Resumo do Concurso */}
          <div className="md:flex items-center justify-between md:gap-6 md:py-2">
            <img
              src={object.metadata.servicos.imagem_servico.url}
              alt="Professora preta, sorrindo com um aluno preto, sorrindo e uma aluna branca sorrindo ao lado dela"
              width={500}
              height={500}
              className="object-cover"
            />

            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-xl uppercase text-[#5185D5]">
                {object.metadata.servicos.titulo_botao}
              </h1>
              <p className="text-justify ">
                {object.metadata.servicos.texto_servico}
              </p>
              <Link
                href={object.metadata.servicos.link_botao}

                //href="/courses"
                target="_blank"
                className="flex w-64 items-center justify-center gap-5 bg-blue-600 text-white-200 p-2 border rounded-full"
              >
                {object.metadata.servicos.titulo_botao}
                <MoveRight size={28} />
              </Link>
            </div>
          </div>

        </div>


      </main>

    </>
    // </ThemeProvider>
  );
}
