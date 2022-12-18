import Head from 'next/head'
import Image from 'next/image'

import styles from './index.module.scss'

import { promises as fs } from 'fs'
import path from 'path'

export async function getStaticProps(context) {
    const dirPath = path.join(__dirname, '@/posts/')

    let files = await fs.readdir(dirPath)

    let posts = []
    for(let file of files) {
        let postPath = path.join(dirPath, file)
        let postPathObj = path.parse(postPath)

        console.log('/home/cesque/personal/exolith/posts/monolith-i.mdx')
        console.log(postPath)
        console.log()

        // let module = await import(`${ dirPath }/${ file }`)
        // let meta = module.meta

        posts.push({
            slug: postPathObj.name,
        })
    }

    return {
        props: {
            posts,
        }
    }
}

export default function Home({ posts }) {
    console.log(posts)
    return (
        <div className={ styles.page }>
            <ul className={ styles.list }>
                { posts.map((post, index) => {
                    return <li className={ styles.post } key={ index }>
                        <a className={ styles.postLink } href={ `/${ post.slug }` }>{ post.slug }</a>
                    </li>
                })}
            </ul>
        </div>
    )
}
