export interface HomeProps {
    object: {
        slug: string;
        title: string;
        metadata: {
            image_carousel_one: {
                image_carousel_one: {
                    url: string,
                    imgix_url: string,
                },
                image_alt_one: string,
                image_url_one: string,
            },
            image_carousel_two: {
                image_carousel_two: {
                    url: string,
                    imgix_url: string,
                },
                image_alt_two: string,
                image_url_two: string,
            },
            image_carousel_three: {
                image_carousel_three: {
                    url: string,
                    imgix_url: string,
                    image_alt_three: string,
                    image_url_three: string,
                },
            }
            image_carousel_four: {
                image_carousel_four: {
                    url: string,
                    imgix_url: string,
                },
                image_altl_four: string,
                image_urll_four: string,
            },
            quant_aprovado: string;
            quant_aluno: string;
            anos_educacao: string;
            sobre: {
                image_about: {
                    url: string;
                    imgix_url: string;
                };
                title_about: string;
                text_about: string;
                button_title: string;
                button_url: string;
            };
            aprovados: {
                title_approved: string;
                image_approved: {
                    url: string;
                    imgix_url: string;
                };
                text_approved: string;
                button_title: string;
                button_url: string;
            };
            servicos: {
                title_service: string;
                image_service: {
                    url: string;
                    imgix_url: string;
                };
                text_service: string;
                button_url: string;
            }

        }

    }
}


// interface CarouselProps {
//     image_carousel: {
//         url: string,
//     }
// }