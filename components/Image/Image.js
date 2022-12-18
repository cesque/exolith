import styles from './Image.module.scss'

export default function Image({ src, caption }) {
    return <figure className={ styles.image }>
        <img src={ src } title={ caption } alt={ caption } />
        { caption && <figcaption className={ styles.caption }>{ caption }</figcaption> }
    </figure>
}