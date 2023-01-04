import styles from './Code.module.scss'

export default function Code({ children }) {
    return <code className={ styles.code }>
        { children }
    </code>
}