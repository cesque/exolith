import getTagColor from '@/utils/getTagColor'
import { promises as fs } from 'fs'
import path from 'path'

import styles from './styles.module.scss'

export default async function Page() {
    const dirPath = path.join(process.cwd(), 'posts/')
    let files = await fs.readdir(dirPath)

    let posts = []
    for(let file of files) {
        let postPath = path.join(dirPath, file)
        let postPathObj = path.parse(postPath)

        let { meta } = await import('../posts/' + postPathObj.name + '.mdx')

        let postInfo = await fs.stat(postPath)

        let info = {
            inode: postInfo.ino,
            created: postInfo.birthtime.toISOString(),
            modified: postInfo.mtime.toISOString(),
        }

        posts.push({
            slug: postPathObj.name,
            meta,
            info,
        })
    }

    posts.sort((a, b) => Date.parse(b.info.created) - Date.parse(a.info.created))

    return <div>
        <ul className={ styles.list }>
        { posts.map((post, index) => {
            let createdDate = new Date(Date.parse(post.info.created))
            let modifiedDate = new Date(Date.parse(post.info.modified))

            return <li key={ index } className={ styles.post }>
                <a href={ `/${ post.slug }` }>{ post.meta.title }</a>
                <div className={ styles.date }>{ createdDate.toLocaleDateString({ dateStyle: 'short' }) }</div>
                <ul className={ styles.tags }>
                    { post.meta.tags.map(tag => {
                        let color = getTagColor(tag)

                        let tagStyles = {
                            backgroundColor: color
                        }

                        return <li className={ styles.tag } style={ tagStyles }>
                            { tag }
                        </li>
                    })}
                </ul>
            </li> 
        }) }
        </ul>
    </div>
}