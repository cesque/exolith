import Header from "@/components/Header/Header";
import Post from "@/components/Post/Post";
import TarotGrid from "@/components/TarotGrid/TarotGrid";

export default async function TarotGridPage() {
    const slug = 'tarot-grid'
    const meta = { title: 'Tarot Decks - Grid', tags: [ 'personal', 'occult' ] }
    const info = {
        inode: 0,
    }

    return <>
        <Header slug={ slug } />

        <Post slug={ slug } meta={ meta } info={ info }>
            <TarotGrid />
        </Post>
    </>
}