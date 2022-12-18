import styles from './Post.module.scss'

export default function Post({ slug, info, meta, children }) {
    return <div className={ styles.container }>
        <h1 className={ styles.title }>{ meta.title }</h1>
        <article className={ styles.post }>

            <div className={ styles.info }>
                <p>
                    { JSON.stringify(info) }
                </p>
                <p>
                    { JSON.stringify(meta) }
                </p>
            </div>

            { children }
        </article>
    </div>
}