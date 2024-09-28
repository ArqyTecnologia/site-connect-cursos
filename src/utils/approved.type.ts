export interface ApprovedProps {
    object: {
        slug: string,
        title: string,
        metadata: {
            title_page : string,
            description_page: string,
            aprovados: ItemApproved[];

        }
    }

}

interface ItemApproved {
    image_aprovado: {
        url: string,
        imgix_url: string,
    },
    name_aluno: string,
    concurso_aprovado: string,
}


