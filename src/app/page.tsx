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
          quant_aluno={object.metadata.quant_aluno}
          anos_educacao={object.metadata.anos_educacao}
          quant_aprovados={object.metadata.quant_aprovado}
        />

        <div className="flex flex-col gap-8 m-10 my-4 px-10 py-5">
          {/* Resumo do sobre */}
          <div className="md:flex items-center justify-between md:gap-6 md:py-2">
            <img
              src={object.metadata.sobre.image_about.url}
              alt={object.metadata.sobre.image_about.imgix_url}
              width={500}
              height={500}
              className="object-cover"
            />
            <div className="flex flex-col justify-between gap-5">
              <h1 className="font-bold text-xl uppercase text-[#5185D5]">
                {object.metadata.sobre.title_about}
              </h1>
              <p className="text-justify">
                {object.metadata.sobre.text_about}
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
            
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-xl  uppercase text-[#5185D5]">
                {object.metadata.aprovados.title_approved}
              </h1>
              <p className="text-justify ">
                {object.metadata.aprovados.text_approved}
              </p>
              <Link
                href="https://api.whatsapp.com/send?phone=5577981551759"

                //href="/approved"
                target="_blank"
                className="flex w-72 items-center justify-center gap-5 bg-blue-600 text-white-200 p-2  border rounded-full"
              >
                Conheça nossos aprovados
                <MoveRight size={28} />
              </Link>
            </div>

            <img
              src={object.metadata.aprovados.image_approved.url}
              alt="Professora preta, sorrindo com um aluno preto, sorrindo e uma aluna branca sorrindo ao lado dela"
              width={500}
              height={500}
              className="object-cover "
            />
          </div>

          {/* Resumo do Concurso */}
          <div className="md:flex items-center justify-between md:gap-6 md:py-2">
            <img
              src={object.metadata.servicos.image_service.url}
              alt="Professora preta, sorrindo com um aluno preto, sorrindo e uma aluna branca sorrindo ao lado dela"
              width={500}
              height={500}
              className="object-cover"
            />

            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-xl uppercase text-[#5185D5]">
                {object.metadata.servicos.title_service}
              </h1>
              <p className="text-justify ">
                {object.metadata.servicos.text_service}
              </p>
              <Link
                href="https://api.whatsapp.com/send?phone=5577981551759"

                //href="/courses"
                target="_blank"
                className="flex w-64 items-center justify-center gap-5 bg-blue-600 text-white-200 p-2 border rounded-full"
              >
                Conheça nossos serviços
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
