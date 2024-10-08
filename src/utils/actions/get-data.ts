
export async function getDataHome() {
    try {
        const res = await fetch
            (`${process.env.NEXT_PUBLIC_API_URL}/objects/66fd792bbf0105632ef05c3d?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`,
                 { next: { revalidate: 120 } })

        if (!res.ok) {
            throw new Error("Falha na requisição")
        }

        return res.json()
    } catch (error) {
        throw new Error("Falha na requisição")
    }
}


export async function getDataAbout() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/66fd753fbf0105632ef05bff?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,`, { next: { revalidate: 120 } })
        // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/66e0f79ad189d5f838aaa9f7?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,`)

        if (!res.ok) {
            throw new Error("Falha na requisição")
        }

        return res.json();

    } catch (error) {
        throw new Error("Falha na requisição")
    }
}


export async function getDataService() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/66fd753fbf0105632ef05bff?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,`, { next: { revalidate: 120 } })
        // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/66e0f79ad189d5f838aaa9f7?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,`)

        if (!res.ok) {
            throw new Error("Falha na requisição")
        }

        return res.json();

    } catch (error) {
        throw new Error("Falha na requisição")
    }
}


export async function getDataCourses() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pagina-servicos%22%7D&limit=10&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`,
            { next: { revalidate: 120 } })
        //https://api.cosmicjs.com/v3/buckets/connnect-cursos-production/objects?pretty=true&query=%7B%22type%22:%22pagina-servicos%22%7D&limit=10&read_key=knInw48oMMBxOyODHgLbJE2Ik814CtPBBHz9shYwHe3T8dPYiF&depth=1&props=slug,title,metadata,
        if (!res.ok) {
            throw new Error("Falha na requisição")
        }

        return res.json();

    } catch (error) {
        throw new Error("Falha na requisição")
    }
}

export async function getCouseBySlug(itemSlug: string) {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`

    const queryParams = new URLSearchParams({
        query: JSON.stringify({
            slug: itemSlug
        }), 
        props: 'slug, title, content, metadata',
        read_key: process.env.READ_KEY as string
    })

    const url = `${baseUrl}?${queryParams.toString()}`;

    try{

        const res = await fetch(url, {next: {revalidate:120}})

        if(!res.ok){
            throw new Error("Falha na requisição");
        }

        return res.json();

    }catch(err){
        throw new Error("Falha na requisição")
    }
}

export async function getDataApproved() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/66fd7785bf0105632ef05c13?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,`, { next: { revalidate: 120 } })
        // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/66e0f79ad189d5f838aaa9f7?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,`)
        //
        if (!res.ok) {
            throw new Error("Falha na requisição")
        }

        return res.json();

    } catch (error) {
        throw new Error("Falha na requisição")
    }
}