export interface CoursesProps {
    objects: ItemCoursesProps[];
}

interface ItemCoursesProps {
    slug: string,
    title: string,
    metadata: {
        titulo_servico: string,
        imagem_servico: {
            url: string
        },
        texto_curto_servico: string,
        texto_servico: string,
        grupo_botao: {
            ativar_botao: boolean,
            butao_titulo: string,
        },
        link_botao: string,
    }
}