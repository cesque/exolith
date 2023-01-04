import { H1 } from '@/markdownComponents/Heading/Heading'
import Footer from '../Footer/Footer'
import styles from './Post.module.scss'

export default function Post({ slug, info, meta, children }) {
    return <div className={ styles.container }>
        <H1 className={ styles.title }>{ meta.title }</H1>

        <article className={ styles.post }>
            { children }
        </article>

        <Footer slug={ slug } info={ info } meta={ meta } />
    </div>
}