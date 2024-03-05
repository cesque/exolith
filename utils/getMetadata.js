export function getMetadata(title, type) {
    let pageTitle = `exolith ⁄ ${ title || 'by cesque'}`
    let description = `exolith ⁄ ${ title || 'a blog/wiki/knowledge-base/thought-dump' } ⁄ by cesque`

    let imageParams = new URLSearchParams()
    imageParams.set('title', title || '')

    let url = process.env.VERCEL_URL ? `https://${ process.env.VERCEL_URL }` : `http://localhost:3000`

    return {
        title: pageTitle,
        description: description,
        icons: {
            icon: '/favicon.svg',
        },
        openGraph: {
            title: pageTitle,
            description: description,
            type: type,
            images: [{
                url: `${ url }/api/og?${ imageParams.toString() }`,
                width: 1000,
                height: 500,
            }],
        },
        twitter: {
            card: 'summary_large_image',
            site: '@cesque',
        },
        themeColor: '#000000',
    }
}