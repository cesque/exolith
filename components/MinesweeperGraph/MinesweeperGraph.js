'use client'

import styles from './MinesweeperGraph.module.scss'

import {
    XAxis,
    YAxis,
    ComposedChart,
    Scatter,
    ZAxis,
    ReferenceLine,
    CartesianGrid,
    ResponsiveContainer,
    Line
} from 'recharts'
import solves from '@/data/minesweeperSolves.json'
import { useId } from 'react'
import { DateTime, Duration } from 'luxon'

export default function MinesweeperGraph() {
    let id = useId()

    let data = solves.map(solve => {
        return {
            ...solve,
            dateTime: DateTime.fromISO(solve.finishedAt),
            duration: Duration.fromMillis(solve.duration),
        }
    })

    data.sort((a, b) => a.dateTime - b.dateTime)

    // ----- generate scatter plot for continuous PBs -----
    let pbs = []
    for(let solve of data) {
        solve.r = 0

        if(pbs.length == 0 || solve.duration < pbs[pbs.length - 1].duration) {
            pbs.push({ ...solve, r: 1})
        }
    }

    let pb = +pbs[pbs.length - 1].duration
    console.log({ pb })
    
    // ----- generate average line -----
    const window = 50
    const dropOutliers = 2
    let averages = []
    for(let i = 0; i < data.length - window - 1; i++) {
        let averageDuration = 0
        let averageDate = 0
        let windowItems = data.slice(i, i + window)
        windowItems.sort((a, b) => a.duration - b.duration)
        windowItems = windowItems.slice(0, windowItems.length - dropOutliers)

        for(let item of windowItems) {
            averageDuration += item.duration.toMillis() / windowItems.length
            averageDate += item.dateTime.toMillis() / windowItems.length
        }

        averages.push({
            dateTime: DateTime.fromMillis(averageDate),
            duration: Duration.fromMillis(averageDuration),
        })
    }

    // ----- generate ticks for x (time) axis -----
    let endDate = data[data.length - 1].dateTime.plus({ months: 1 }).endOf('month')
    let xTickDate = data[0].dateTime.startOf('month')
    let xTickDates = []
    while(xTickDate < endDate) {
        xTickDates.push(xTickDate)
        xTickDate = xTickDate.plus({ months: 1 })
    }
    let xTicks = xTickDates.map(tick => tick.toMillis())

    function formatXTicks(value) {
        let tickDate = DateTime.fromMillis(value)
        return tickDate.toFormat('LLL yy')
    }

    // ----- generate ticks and domain for y (duration) axis -----
    let yDomain = [
        1000 * 60,
        1000 * 360,
    ]

    let yTicks = []
    for(let yTick = yDomain[0]; yTick <= yDomain[1]; yTick += (1000 * 10)) {
        yTicks.push(yTick)
    }

    return <div className={ styles.container }>
        <ResponsiveContainer width="100%" height={ 500 } debounce={ 100 }>
            <ComposedChart margin={{ top: 10, left: 0, right: 0, bottom: 0 }}>
                <XAxis dataKey="dateTime"
                    type="number"
                    domain={ ['dataMin', 'dataMax'] }
                    ticks={ xTicks }
                    tickFormatter={ formatXTicks }
                    interval={ 0 }
                    style={{
                        fontSize: 14
                    }}
                />

                <YAxis dataKey="duration"
                    type="number"
                    domain={ yDomain }
                    allowDataOverflow
                    interval={ 0 }
                    tickFormatter={ value => value / 1000 }
                    ticks={ yTicks }
                    width={ 30 }
                    style={{
                        fontSize: 14
                    }}
                />

                <ZAxis dataKey="r" range={ [3, 10] } />

                <CartesianGrid strokeDasharray="3 3" strokeWidth={ 0.5 } />

                {/* <ReferenceLine y={ pb }
                    stroke="#e74c3c"
                    strokeWidth={ 0.5 }
                    // strokeDasharray="1 1"
                    // label="PB"
                    label={ <ReferenceLabel value="PB" fill="#e74c3c" /> }
                    // style={{
                    //     fontSize: 5
                    // }}
                /> */}

                <ReferenceLine y={ 100000 }
                    stroke="#ecf0f1"
                    strokeWidth={ 2 }
                />  

                <Scatter data={ data }
                    type="linear"
                    fill="black"
                    id={ id }
                    isAnimationActive={ false }
                />

                <Scatter data={ pbs }
                    type="linear"
                    fill="#e74c3c"
                    id={ id }
                    line
                    lineJointType="stepAfter"
                    isAnimationActive={ false }
                    strokeDasharray="1 1"
                />

                <Line data={ averages }
                    dataKey="duration"
                    dot={ false }
                    stroke="#3498db"
                    strokeDasharray="2 1"
                />
            </ComposedChart>
        </ResponsiveContainer>
    </div>
}