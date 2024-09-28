/* eslint-disable react/no-children-prop */
import Image from "next/image";

import AlunoSobre from "../../assets/alunoseprofessores.png"
import AlunoAprovado from "../../assets/aprovadoseprofessores.png"
import AlunoEnem from "../../assets/alunosEnem.png"

import { Button } from "../Button/Button";
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

//import { getPrismicClient } from "@/src/services/prismic";
// import Prismic from "@prismicio/client";
// import { GetStaticProps } from "next";

export function Summary() {
    return (
        <div className="flex flex-col gap-8 m-10 my-4  px-10 py-5">
            {/* Resumo do sobre */}
            <div className="flex items-center justify-center">
                <Image
                    src={AlunoSobre}
                    alt="Professora preta, sorrindo com um aluno preto, sorrindo e uma aluna branca sorrindo ao lado dela"
                    className="object-cover"
                />
                <div className="flex flex-col justify-between gap-5">
                    <h1 className="font-bold text-xl uppercase text-[#5185D5]">
                        Ensino de qualidade com responsabilidade
                    </h1>
                    <p className="text-justify">
                        Somos o Connect Cursos, Instituição de Ensino, excelência em ensino-aprendizagem de jovens e adultos através de cursos voltados para Ensino Fundamental II, Ensino Médio, ENEM, Concursos e Vestibulares.
                        Atuamos em diversas áreas da educação com o objetivo de primar por soluções que viabilizam o conhecimento através do estudo qualificado.

                    </p>
                    <div >
                        <Link
                            href="https://api.whatsapp.com/send?phone=5577981551759"
                            // href="/about"
                            target="_blank"
                            className="flex w-64 items-center justify-center gap-5 bg-blue-600 text-white-200 p-2 border rounded-full "
                        >
                            Conheça-nos melhor
                            <ArrowRight size={28} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Resumo do Enem */}
            <div className="flex items-center justify-between gap-6 ">
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-xl uppercase text-[#5185D5]">
                        A preparação mais completa para o Enem 2024
                    </h1>
                    <p className="text-justify ">
                        O Curso Preparatório para o Enem,  do Connect Cursos abrange todas as matérias do Ensino Médio, com uma programação que permite o aprofundamento gradativo dos assuntos.
                        O método pedagógico do Connect já ajudou muitos estudantes a alcançarem a vaga dos sonhos e essa é a sua chance de trilhar o mesmo caminho!
                    </p>
                    <Link
                        href="https://api.whatsapp.com/send?phone=5577981551759"
                        // href="/about"
                        //href="/approved"
                        target="_blank"
                        className="flex w-72 items-center justify-center gap-5 bg-blue-600 text-white-200 p-2  border rounded-full"
                    >
                        Conheça nossos aprovados
                        <ArrowRight size={28} />
                    </Link>
                </div>
                <Image
                    src={AlunoEnem}
                    alt="Professora preta, sorrindo com um aluno preto, sorrindo e uma aluna branca sorrindo ao lado dela"
                    width={500}
                    height={500}
                    className="object-cover"
                />
            </div>

            {/* Resumo do Concurso */}
            <div className="flex items-center justify-between gap-6 ">
                <Image
                    src={AlunoAprovado}
                    alt="Professora preta, sorrindo com um aluno preto, sorrindo e uma aluna branca sorrindo ao lado dela"
                    // width={150}
                    // height={150}
                    className="object-cover"
                />

                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-xl uppercase text-[#5185D5]">
                        Venha ser um dos nossos aprovados!
                    </h1>
                    <p className="text-justify ">
                        Quer aprender de forma eficiente e eficaz? Quer conquistar a tão sonhada vaga em um concurso público? Temos uma ótima notícia para você!🤩
                        Estamos com matrículas abertas!
                        Entre em contato conosco e garanta a sua vaga. Lembrando que as vagas são limitadas!

                    </p>
                    <Link
                        href="https://api.whatsapp.com/send?phone=5577981551759"
                        // href="/about"
                        //href="/courses"
                        target="_blank"
                        className="flex w-64 items-center justify-center gap-5 bg-blue-600 text-white-200 p-2 border rounded-full"
                    >
                        Conheça nossos serviços
                        <ArrowRight size={28} />
                    </Link>
                </div>

            </div>

        </div>
    )
}

// export const getStaticProps: GetStaticProps = async () =>{
    // const prismic = getPrismicClient();

    // const response = await prismic.query([
    //     Prismic.Predicates.at('document.type', 'home')
    // ])

    // console.log("shows")

    // return{
    //     props:{

    //     }
    // }
//}
