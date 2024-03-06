import { getMetadata } from '@/utils/getMetadata'

export async function generateMetadata({ params: { slug }}) {
    return getMetadata(slug, 'article')
}

export default function Layout({ children }) {
    return <>
        { children }
    </>
}