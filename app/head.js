import { getMetadata } from "@/utils/getMetadata"

export default async function Head({ params: { slug }}) {
    let title = `exolith ⁄ by cesque`

    return <>
        <title>{ title }</title>
        <link rel="icon" href="/favicon.ico" />
        { getMetadata(null, 'website') }
    </>
}