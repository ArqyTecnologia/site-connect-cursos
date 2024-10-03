import { getCouseBySlug } from "@/src/utils/actions/get-data"
import { CoursesProps } from "@/src/utils/courses.type";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params: { slug } }: {
    params: { slug: string }
}) {

    const { objects }: CoursesProps = await getCouseBySlug(slug);
    //console.log(JSON.stringify(objects, null, 2))

    return (
        <>
            <div className="flex flex-col m-10 my-4 px-10 py-5 justify-center items-center">
                <h1 className="text-blue-400 uppercase font-bold pb-4 text-lg">
                    {objects[0].metadata.titulo_servico}
                </h1>
                <main className="grid grid-cols-2 gap-4 items-center">
                    <Image
                        src={objects[0].metadata.imagem_servico.url}
                        alt="Foto de uma professora preta com o braço levando"
                        width={500}
                        height={500}
                        quality={100}
                        className="w-full"
                    />
                    <div className="flex flex-col">
                        {/* <h2 className="text-blue-400 uppercase font-bold pb-4 text-lg">
                            {objects[0].metadata.title_service}
                        </h2> */}

                        <p className="font-medium pb-4 text-base text-justify">
                            {objects[0].metadata.texto_servico}
                        </p>

                        <Link 
                            href={objects[0].metadata.link_botao}
                            target="_blank"
                            className="flex w-72 items-center justify-center gap-5 bg-blue-600 text-white-200 p-2  border rounded-full"
                        >
                            {objects[0].metadata.grupo_botao.butao_titulo}
                            <MoveRight size={28} />
                        </Link>
                    </div>
                </main>
            </div>
        </>

    )
}