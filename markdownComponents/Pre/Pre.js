import styles from './Pre.module.scss'

export default function Pre({ children }) {
    let language = children.props.className
    return <pre className={ styles.pre }>
        { children }
    </pre>
}