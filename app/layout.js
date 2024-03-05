import '@/styles/globals.scss'

import { getMetadata } from '@/utils/getMetadata'

export const metadata = getMetadata(null, 'website')

export default function Layout({ children }) {
    return <html>
        <body>
            { children }
        </body>
    </html>
}