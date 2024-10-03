export interface ApprovedProps {
    object: {
        slug: string,
        title: string,
        metadata: {
            titulo_pagina : string,
            descricao_pagina: string,
            aprovados: ItemApproved[];

        }
    }

}

interface ItemApproved {
    imagem_aprovado: {
        url: string,
        imgix_url: string,
    },
    nome_aluno: string,
    concurso_aprovado: string,
}


