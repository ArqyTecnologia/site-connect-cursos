import { GraduationCap, Presentation, Trophy, UsersRound } from "lucide-react";
import { CarouselDefault } from "../Carousel/Carousel";

interface HankingProps {
    quant_aprovados: string;
    quant_aluno: string;
    anos_educacao: string;
}

export function Hanking({ quant_aprovados, quant_aluno, anos_educacao }: HankingProps) {
    return (
        <>
            <div className="flex md:justify-between justify-center md:mx-32 md:my-10 text-center items-center p-6">               
                <div className=" flex flex-col items-center justify-center">
                    <Trophy size={64}/>
                    <div>
                        <strong>+ {quant_aprovados} </strong>
                        <span>APROVADOS</span>
                    </div>

                </div>
                <div className=" flex flex-col items-center justify-center">
                <GraduationCap size={64} />
                    <div>
                        <strong>+ {quant_aluno} </strong>
                        <span>ALUNOS</span>
                    </div>

                </div>
                <div className=" flex flex-col items-center justify-center">
                <Presentation size={64} />
                    <div>
                        <strong>+ {anos_educacao}</strong>
                        <span> MERCADO DA EDUCAÇÃO</span>
                    </div>

                </div>
            </div>
        </>

    )
}