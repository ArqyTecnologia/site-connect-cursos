import { CardServices } from "@/src/components/CardServices/CardServices";
import { CardsTeacher } from "@/src/components/CardTeacher/CardTeacher";
import profvinicius from '../../assets/profviníciusassis_direito_penal.jpg';
import { getDataApproved } from "@/src/utils/actions/get-data";
import { ApprovedProps } from "@/src/utils/approved.type";

export default async function Approved() {
    const { object }: ApprovedProps = await getDataApproved();

    // console.log(object.metadata.description_page)

    return (
        <div className="flex flex-col gap-8 m-10 my-4  px-10 py-5">
            <div className="items-center text-center">
                <h1 className="text-blue-400 uppercase font-bold pb-4 text-lg">
                    {object.metadata.titulo_pagina}
                </h1>
                <p className="font-medium pb-4 text-base">
                    {object.metadata.descricao_pagina}
                </p>
            </div>
            <div className="grid grid-cols-3 gap-8 p-4 items-center justify-between">
                {object.metadata.aprovados.map(item => (
                    <CardsTeacher
                        key={item.nome_aluno}
                        image={item.imagem_aprovado.url}
                        teacher={item.nome_aluno}
                        classTeacher={item.concurso_aprovado}
                    />
                ))}

            </div>


        </div>
    )
}