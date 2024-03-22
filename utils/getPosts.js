import { promises as fs } from 'fs'
import path from 'path'

let _data = null

export default async function getPosts() {
    if(_data) return _data

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

    // sorting by date doesn't really work because the files are always brand new on vercel server
    // posts.sort((a, b) => Date.parse(b.info.created) - Date.parse(a.info.created))
    posts.sort((a, b) => a.slug.localeCompare(b.slug))

    let tags = [...new Set(posts.map(post => post.meta.tags).flat())]

    _data = {
        allPosts: posts,
        posts: posts.filter(post => !post.meta.hidden),
        tags,
    }

    return _data
}