import Image from "next/image";

import { CardsTeacher } from "@/src/components/CardTeacher/CardTeacher";

import professora from "../../assets/profLim.png"
import profvinicius from '../../assets/profviníciusassis_direito_penal.jpg'
import { AboutProps } from "@/src/utils/about.type";
import { getDataAbout } from "@/src/utils/actions/get-data";


export default async function AboutUs() {

    const { object }: AboutProps = await getDataAbout();

    console.log(JSON.stringify(object));

    return (
        <>
            <div className="flex flex-col my-4 px-5 py-5">
                <main className="grid grid-cols-2 gap-4 items-center">
                    <Image
                        src={object.metadata.banner_about.url}
                        alt="Foto de uma professora preta com o braço levando"
                        width={500}
                        height={500}
                        quality={100}
                        className="w-full"
                    />
                    <div className="flex flex-col">
                        <h2 className="text-blue-400 uppercase font-bold pb-4 text-lg">
                            {object.metadata.title_about}
                        </h2>

                        <p className="font-medium pb-4 text-base">
                            {object.metadata.text_about}
                        </p>
                    </div>
                </main>

                <section className="h-screen flex flex-col justify-center items-center ">
                    <div className="flex flex-col text-center">
                        <h2 className="text-blue-400 uppercase font-bold pb-4 text-lg">
                            {object.metadata.title_teacher_time}
                        </h2>
                        <p className="font-medium pb-4 text-base">
                            {object.metadata.text_teacher_time}
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-8 p-4">
                        {object.metadata.teachers.map(teacher => (
                            <CardsTeacher
                                key={teacher.name_teacher}
                                image={teacher.image_teacher.url}
                                teacher={teacher.name_teacher}
                                classTeacher={teacher.class_teachers}
                            />
                        ))}

                        {/* <CardsTeacher
                            image={profvinicius}
                            teacher="Vinicius Assis"
                            classTeacher="Direito Penal"
                        />
                        <CardsTeacher
                            image={profvinicius}
                            teacher="Vinicius Assis"
                            classTeacher="Direito Penal"
                        /> */}
                    </div>

                </section>
            </div>
        </>


    )
}