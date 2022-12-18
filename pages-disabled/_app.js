import { MDXProvider } from '@mdx-js/react'
import { H1, H2, H3, H4, H5, H6 } from '@/components/Heading/Heading'
import Paragraph from '@/components/Paragraph/Paragraph'
import '../styles/globals.scss'

export async function getStaticProps(context) {
    return {
        props: {
            pageName: __filename,
        }
    }
}

function MyApp({ Component, pageProps }) {
    let components = {
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        h6: H6,

        p: Paragraph,
    }

    return <MDXProvider components={ components }> 
        <Component {...pageProps} />
    </MDXProvider>
}

export default MyApp
