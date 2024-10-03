import { CardServices } from "@/src/components/CardServices/CardServices";

import cardBanner from '../../assets/90F88884-1157-47F4-A962-A4309052FBBA.png'
import { getDataCourses, getDataService } from "@/src/utils/actions/get-data";
import { ServicePageProps, ServiceProps } from "@/src/utils/service.type";
import { CoursesProps } from "@/src/utils/courses.type";
import Link from "next/link";

export default async function Courses() {
    //busca o objeto descrtivo da pagina
    const { object }: ServicePageProps = await getDataService();

    //está buscando os dados da paina de cada curso/serviço
    const courses: CoursesProps = await getDataCourses();

    // console.log(JSON.stringify(object, null, 2));

    // console.log(JSON.stringify(courses, null, 2));

    return (
        <div className="flex flex-col m-10 my-4 px-10 py-5 justify-center">
            <div className="items-center text-center">
                <h2 className="text-blue-400 uppercase font-bold pb-4 text-lg">
                    {object.metadata.title_page}
                </h2>
                <p className="font-medium pb-4 text-base">
                    {object.metadata.description_page}
                </p>
            </div>
            <div className="grid grid-cols-3 gap-8 p-4">
                {courses.objects.map(item => (
                    <Link href={`servicos/${item.slug}`} key={item.slug}>
                        <CardServices
                            image={item.metadata.imagem_servico.url}
                            name_service={item.metadata.titulo_servico}
                            description_service={item.metadata.texto_servico}
                        />
                    </Link>

                ))}
               
            </div>

        </div>
    )
}