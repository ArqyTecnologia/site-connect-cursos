import Image, { StaticImageData } from "next/image"


interface CardProps{
    image: string | StaticImageData;
    name_service: string;
    description_service: string;
}

export function CardServices( card: CardProps) {
    return (
        <div className="max-w-sm rounded shadow-lg">
            <Image
                src={card.image}
                alt="desenho card"
                quality={100}
                width={200}
                height={200}
                className="w-full"
            />
            <div className="px-6 py-4">
                <strong className="font-bold text-xl mb-2">
                    {card.name_service}
                </strong>
                <p className="text-base ">
                    {card.description_service}
                </p>
            </div>
        </div>
    )
}