export interface AboutProps{
    object: {
      slug: string,
      title: string,
      metadata: {
        banner_about: {
          url:string,
          imgix_url: string
        },
        title_about: string,
        text_about: string,
        title_teacher_time: string,
        text_teacher_time: string,
        teachers:TeacherProps [],
      }
    }
  }

  interface TeacherProps{
    image_teacher: {
        url: string,
        imgix_url:string
      },
      name_teacher: string,
      class_teachers: string
  }