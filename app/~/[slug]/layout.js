import { getMetadata } from '@/utils/getMetadata'

export const metadata = getMetadata(null, 'website')

export default function Layout({ children }) {
    return <>
        { children }
    </>
}