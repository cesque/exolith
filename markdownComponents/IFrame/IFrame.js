import styles from './IFrame.module.scss'

export default function IFrame(props) {
    return <div className={ styles.container }>
        <iframe {...props} />
    </div>
}