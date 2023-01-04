import styles from './Video.module.scss'

export default function Video({ src }) {
    return <video className={ styles.video } src={ src } autoPlay loop muted />
}