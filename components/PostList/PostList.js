import getPosts from '@/utils/getPosts'
import Header from '@/components/Header/Header'
import styles from './PostList.module.scss'
import TagsList from '../TagsList/TagsList'
import SimpleFooter from '../Footer/SimpleFooter'

export default async function PostList({ tag }) {
    let { posts, tags } = await getPosts()

    return <div>
        <Header />

        <ul className={ styles.list }>
            { posts.map((post, index) => {
                let isSelected = tag && post.meta.tags.includes(tag)

                let createdDate = new Date(Date.parse(post.info.created))
                let modifiedDate = new Date(Date.parse(post.info.modified))

                return <li key={ index } className={ styles.post }>
                    <a href={ `/${ post.slug }` }>{ isSelected && <span className={ styles.selectedIndicator } /> }{ post.slug }</a>
                </li> 
            }) }
        </ul>
        
        <TagsList tags={ tags } selected={ tag } />

        <SimpleFooter />
    </div>
}