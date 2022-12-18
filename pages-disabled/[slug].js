import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { promises as fs } from 'fs'
import path from 'path';
import Post from '../components/Post/Post';

const dirPath = path.join(__dirname, '../../../posts/')

export async function getStaticPaths(context) {
    let posts = await fs.readdir(dirPath)

    let paths = []
    
    for(let post of posts) {
        let postPath = path.parse(path.join(dirPath, post))

        paths.push({
            params: {
                slug: postPath.name
            }
        })
    }

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    let slug = context.params.slug

    let postPath = path.parse(path.join(dirPath, slug + '.mdx'))
    let postInfo = await fs.stat(path.format(postPath))

    let module = await import('../posts/' + slug + '.mdx')
    let meta = module.meta

    console.log(meta)

    return {
        props: {
            slug,
            meta,
            path: postPath,
            info: {
                inode: postInfo.ino,
                created: postInfo.birthtime.toISOString(),
                modified: postInfo.mtime.toISOString(),
            },
        }
    }
}


export default function PostPage({ slug, path, info, meta }) {
    let PostContents = dynamic(async () => {
        let module = await import('../posts/' + slug + '.mdx')

        return module.default
    }, { ssr: true })

    return <Post slug={ slug } path={ path } info={ info } meta={ meta }>
        <PostContents />
    </Post>
}