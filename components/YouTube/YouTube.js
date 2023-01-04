import styles from './YouTube.module.scss'

export default function YouTube({ videoId, time }) {
    let url = `https://www.youtube.com/embed/${ videoId }`

    let params = new URLSearchParams()

    if(time) {
        params.set('t', time)
    }

    return <figure className={ styles.youtube }>
        <iframe
            src={ `${ url }?${ params.toString() }` }
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
        />
    </figure>
}