export interface ServicePageProps {
   object: {
    slug: string,
    title: string,
    metadata: {
      title_page: string,
      description_page: string
    }
  }

}

export interface ServiceProps {
    object: {
    slug: string,
    title: string,
    metadata: {
      titulo_servico: string,
      imagem_servico: {
        url: string,
        imgix_url: string
      },
      texto_curto_servico: string,
      texto_servico: string,
      grupo_botao: {
        ativar_botao: boolean,
        butao_titulo: string,
        link_botao: string
      }
    }
  }
 
 }