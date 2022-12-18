import Header from "@/components/Header/Header";

import '@/styles/globals.scss'

export default function Layout({ children }) {
    return <div>
        <Header />

        { children }
    </div>
}