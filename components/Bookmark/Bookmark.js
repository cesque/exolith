import styles from './Bookmark.module.scss'

export default function Bookmark({ link, image, title, description, favicon, site, publisher }) {
    return <article className={ styles.bookmark }>
        <a href={ link } className={ styles.link }>
            <figure className={ styles.imageContainer }>
                <img src={ image } className={ styles.image } />
            </figure>

            <div className={ styles.content }>
                <div className={ styles.title }>{ title }</div>
                <div className={ styles.description }>{ description }</div>

                <div className={ styles.footer }>
                    <img src={ favicon } className={ styles.favicon } />
                    <div className={ styles.site }>{ site }</div>
                    <div className={ styles.separator } />
                    <div className={ styles.publisher }>{ publisher }</div>
                </div>
            </div>
        </a>
    </article>
}