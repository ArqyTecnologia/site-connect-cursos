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
      title_service: string,
      image_service: {
        url: string,
        imgix_url: string
      },
      text_preview_service: string,
      text_service: string,
      button_group: {
        button_active: boolean,
        button_title: string,
        button_link: string
      }
    }
  }
 
 }