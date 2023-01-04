import { getMetadata } from "@/utils/getMetadata"
import getPost from "@/utils/getPost"

export default async function Head({ params: { slug }}) {
    let { meta } = await getPost(slug)

    let title = `exolith ⁄ ${ meta.title }`

    return <>
        <title>{ title }</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
        { getMetadata(meta.title, 'article') }
    </>
}