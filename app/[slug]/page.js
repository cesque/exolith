import { promises as fs } from 'fs'
import path from 'path'
import Post from '../../components/Post/Post'

import { H1, H2, H3, H4, H5, H6 } from '@/markdownComponents/Heading/Heading'
import Paragraph from '@/markdownComponents/Paragraph/Paragraph'

import Image from '@/components/Image/Image'

const dirPath = path.join(process.cwd(), 'posts/')

export async function generateStaticParams() {
    let files = await fs.readdir(dirPath)

    let posts = []
    for(let file of files) {
        let postPath = path.join(dirPath, file)
        let postPathObj = path.parse(postPath)

        posts.push({
            slug: postPathObj.name,
        })
    }

    return posts
}

async function getPost(slug) {
    let post = await import('../../posts/' + slug + '.mdx')

    return post
}

export default async function PostPage({ params: { slug }, searchParams }) {
    let { default: PostContent, meta } = await getPost(slug)

    let postInfo = await fs.stat(path.join(dirPath, slug + '.mdx'))

    let info = {
        inode: postInfo.ino,
        created: postInfo.birthtime.toISOString(),
        modified: postInfo.mtime.toISOString(),
    }

    let components = {
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        h6: H6,

        p: Paragraph,

        Image,
    }

    return <Post slug={ slug } meta={ meta } info={ info }>
        <PostContent components={ components } />
    </Post>
}