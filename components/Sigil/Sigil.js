'use client'

import { useEffect, useRef } from 'react'
import styles from './Sigil.module.scss'

export default function Sigil({ code, dots }) {
    let canvasRef = useRef()

    const borderSizePercent = 10
    const pointSizePercent = 1
    const lineWidthPercent = 2

    /*
        1 2 3
        4 5 6
        7 8 9
    */
    const coordinates = {
        1: {x: 0, y: 0},
        2: {x: 1, y: 0},
        3: {x: 2, y: 0},
        4: {x: 0, y: 1},
        5: {x: 1, y: 1},
        6: {x: 2, y: 1},
        7: {x: 0, y: 2},
        8: {x: 1, y: 2},
        9: {x: 2, y: 2},
    }

    function render() {
        // canvasRef.current.setAttribute('height')
        let canvas = canvasRef.current
        let parent = canvas.parentNode
        let parentSize = parent.getBoundingClientRect()

        canvas.width = parentSize.width
        canvas.height = parentSize.width

        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        function size(n) {
            return canvas.width * (n / 100)
        }

        let borderSize = size(borderSizePercent)

        console.log(canvas.width, borderSize, borderSizePercent)
        let sigilSize = canvas.width - (borderSize * 2)

        let cellSize = sigilSize / 2

        if(dots) {
            ctx.fillStyle = '#eee'

            for(let y = 0; y < 3; y++) {
                for(let x = 0; x < 3; x++) {
                    ctx.beginPath();
                    ctx.arc(borderSize + x * cellSize, borderSize + y * cellSize, size(pointSizePercent), 0, 2 * Math.PI);
                    ctx.fill()
                }
            }
        }

        let startCoodinates = coordinates[code[0]]

        ctx.beginPath();
        ctx.moveTo(borderSize + startCoodinates.x * cellSize, borderSize + startCoodinates.y * cellSize)

        for(let i = 1; i < code.length; i++) {
            let next = coordinates[code[i]]

            ctx.lineTo(borderSize + next.x * cellSize, borderSize + next.y * cellSize)
        }

        ctx.strokeStyle = 'black'
        ctx.lineWidth = size(lineWidthPercent)
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.stroke()
    }

    useEffect(() => {
        render()

        let timeoutId = null

        const resizeListener = () => {
            clearTimeout(timeoutId);
            // debounce render on resize (but doesn't really matter here so just set it to 1)
            timeoutId = setTimeout(render, 1);
        }

        window.addEventListener('resize', resizeListener)

        return () => {
            window.removeEventListener('resize', resizeListener)
        }
    }, [])


    return <div className={ styles.container }>
        <canvas className={ styles.canvas } ref={ canvasRef } />
    </div>
}