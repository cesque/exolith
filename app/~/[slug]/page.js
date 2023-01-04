import PostList from '@/components/PostList/PostList'

export default async function Page({ params: { slug }}) {
    return <PostList tag={ slug } />
}