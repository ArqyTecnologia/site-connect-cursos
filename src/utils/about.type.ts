export interface AboutProps{
    object: {
      slug: string,
      title: string,
      metadata: {
        imagem_sobre: {
          url:string,
          imgix_url: string
        },
        titulo_sobre: string,
        texto_sobre: string,
        titulo_time_professore: string,
        texto_time: string,
        professores:TeacherProps [],
      }
    }
  }

  interface TeacherProps{
    imagem_professor: {
        url: string,
        imgix_url:string
      },
      nome_professor: string,
      materia_professor: string
  }