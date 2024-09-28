"use client"
import * as React from "react"

import useEmblaCarousel from 'embla-carousel-react'

import { } from "@/components/ui/button"

import image_1 from "../../../public/image_1.jpeg"
import image_2 from "../../../public/image_2.jpeg"
import image_3 from "../../../public/image_3.jpeg"
import image_4 from "../../../public/image_4.jpeg"

// import {  } from "@/components/ui/carousel"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"

export function CarouselDemo() {
    return (

        <Carousel className="w-full "
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
        >
            <CarouselContent>
                <CarouselItem>
                    <Link href="/about" >
                        <Image
                            src={image_1}
                            alt="Quem Somos"
                            className="h-full w-full object-cover"
                        />
                    </Link>
                </CarouselItem>
                <CarouselItem>
                <Link href="/approved" >
                        <Image
                            src={image_2}
                            alt="Aprovados"
                            className="h-full w-full object-cover"
                        />
                    </Link>
                </CarouselItem>
                <CarouselItem>
                <Link href="/courses" >
                    <Image
                        src={image_3}
                        alt="Serviços Ofertados"
                        className="h-full w-full object-cover"
                    />
                </Link>
                </CarouselItem>
                <CarouselItem>
                <Link href="/courses" >
                    <Image
                        src={image_4}
                        alt="Serviços Ofertados"
                        className="h-full w-full object-cover"
                    />
                </Link>
                </CarouselItem>
               
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext /> 
             
        </Carousel>
    )
}