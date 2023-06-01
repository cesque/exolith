import classNames from 'classnames'
import styles from './Image.module.scss'

export default function Image({ src, caption, wide, full }) {
    let classes = classNames(styles.image, {
        [styles.imageWide]: !!wide,
        [styles.imageFull]: !!full,
    })

    return <a href={ src } target="_blank" className={ classes }>
        <figure className={ styles.figure }>
            <img src={ src } title={ caption } alt={ caption } />
            { caption && <figcaption className={ styles.caption }>{ caption }</figcaption> }
        </figure>
    </a>
}