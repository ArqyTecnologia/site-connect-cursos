export interface HomeProps {
    object: {
        slug: string;
        title: string;
        metadata: {
            quantidade_aprovado: string;
            quantidade_aluno: string;
            anos_educacao: string;
            sobre: {
                imagem_sobre: {
                    url: string;
                    imgix_url: string;
                };
                titulo_sobre: string;
                texto_sobre: string;
                titulo_botao: string;
                link_botao: string;
            };
            aprovado: {
                
                imagem_aprovado: {
                    url: string;
                    imgix_url: string;
                };
                titulo_aprovado: string;
                texto_aprovado: string;
                titulo_botao: string;
                link_botao: string;
            };
            servicos: {
                imagem_servico: {
                    url: string;
                    imgix_url: string;
                };
                titulo_servico: string,
                texto_servico: string,
                titulo_botao: string,
                link_botao: string
            }

        }

    }
}


// interface CarouselProps {
//     image_carousel: {
//         url: string,
//     }
// }