/* eslint-disable @next/next/no-img-element */
import Image, { StaticImageData } from "next/image"

interface CardProps{
    image: string | StaticImageData ;
    teacher: string |null;
    classTeacher: string | null;
}

export function CardsTeacher( card: CardProps) {
    return (
        <div className="max-w-sm rounded border-4 border-blue-400 shadow-lg">
            <Image
                src={card.image}
                alt="desenho card"
                // quality={100}
                width={200}
                height={200}
                className="w-full"
            />
            <div className="px-6 py-4 text-center bg-blue-400 text-white-200">
                <strong className="font-bold mb-2">
                    {card.teacher}
                </strong>
                <p className="text-base">
                    {card.classTeacher}
                </p>
            </div>
        </div>
    )
}