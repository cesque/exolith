import { ImageResponse } from '@vercel/og'

export const config = {
    runtime: 'experimental-edge',
}

function Header() {
    return <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ fontWeight: 200 }}>cesque</div>
        <div style={{ fontWeight: 200, margin: '0 25px' }}>/</div>
        <div style={{ fontWeight: 200 }}>exolith</div>
    </div>
}

export default async function handler(req, res) {
    let { searchParams } = req.nextUrl

    let title = searchParams.get('title')

    let lightData = await (await fetch(new URL(`@/public/Inconsolata/Inconsolata-Light.ttf`, import.meta.url))).arrayBuffer()
    let regularData = await (await fetch(new URL(`@/public/Inconsolata/Inconsolata-Regular.ttf`, import.meta.url))).arrayBuffer()
    let boldData = await (await fetch(new URL(`@/public/Inconsolata/Inconsolata-Bold.ttf`, import.meta.url))).arrayBuffer()

    let fonts = [{
        name: 'Inconsolata',
        data: lightData,
        style: 'normal',
        weight: 200,
    }, {
        name: 'Inconsolata',
        data: regularData,
        style: 'normal',
        weight: 400,
    }, {
        name: 'Inconsolata',
        data: boldData,
        style: 'normal',
        weight: 600,
    }]

    return new ImageResponse(
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: 50,
                fontFamily: 'Inconsolata',
                fontSize: 60,
                width: '100%',
                background: 'white',
            }}>
                <Header />

                <div style={{ 
                    height: 5,
                    width: '100%',
                    background: 'black',
                    margin: '50px 0',
                }} />

                <div style={{
                    fontSize: 90,
                    fontWeight: 600,
                }}>{ title }</div>
            </div>
    , {
        width: 1000,
        height: 500,
        fonts,
    })
}