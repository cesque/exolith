import { promises as fs } from 'fs'
import path from 'path'
import Post from '../../components/Post/Post'

import { H1, H2, H3, H4, H5, H6 } from '@/markdownComponents/Heading/Heading'
import Paragraph from '@/markdownComponents/Paragraph/Paragraph'

import Image from '@/components/Image/Image'
import { GameRecommendationList } from '@/components/GameRecommendation/GameRecommendation'
import TTRPGList from '@/components/TTRPG/TTRPG'
import Header from '@/components/Header/Header'
import Code from '@/markdownComponents/Code/Code'
import Pre from '@/markdownComponents/Pre/Pre'
import Table from '@/markdownComponents/Table/Table'
import YouTube from '@/components/YouTube/YouTube'
import Bookmark from '@/components/Bookmark/Bookmark'
import Sigil from '@/components/Sigil/Sigil'
import Video from '@/components/Video/Video'
import getPost from '@/utils/getPost'

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

export default async function PostPage({ params: { slug }, searchParams }) {
    let { default: PostContent, meta, info } = await getPost(slug)

    console.log(meta)

    let components = {
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        h6: H6,

        p: Paragraph,
        code: Code,
        pre: Pre,

        table: Table,
        Table: Table,

        Image,
        GameRecommendationList,
        TTRPGList,
        YouTube,
        Bookmark,
        Sigil,
        Video,
    }

    return <>
        <Header slug={ slug } />

        <Post slug={ slug } meta={ meta } info={ info }>
            <PostContent components={ components } />
        </Post>
    </>
}