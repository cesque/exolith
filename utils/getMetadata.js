export function getMetadata(title, type) {
    let pageTitle = `exolith ⁄ ${ title || 'by cesque'}`
    let description = `exolith ⁄ ${ title || 'a blog/wiki/knowledge-base/thought-dump' } ⁄ by cesque`

    let imageParams = new URLSearchParams()
    imageParams.set('title', title)

    let url = process.env.VERCEL_URL ? `https://${ process.env.VERCEL_URL }` : `http://localhost:3000`

    let meta = {
        og: {
            title: pageTitle,
            type: type,
            image: `${ url }/api/og?${ imageParams.toString() }`,
            'image:width': 1000,
            'image:height': 500,
            description: description  
        },
        twitter: {
            card: 'summary_large_image',
            site: '@cesque',
        }
    }

    return <> 
        <meta name="theme-color" content="#000000" />
        { 
            Object.keys(meta).map(section => {
                return Object.keys(meta[section]).map(name => {
                    let content = meta[section][name]
                    let nameText = `${section}:${name}` 

                    if(section == 'og') {
                        return <meta property={ nameText } content={ content } />
                    } else {
                        return <meta name={ nameText } content={ content } />
                    }
                })
            }).flat()
        }
    </>
}