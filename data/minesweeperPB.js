import solves from '@/data/minesweeperSolves.json'
import { DateTime } from 'luxon'

let pb = Infinity
let latest = '1970-01-01'

for (const solve of solves) {
    if (solve.duration < pb) {
        pb = solve.duration
    }

    if (solve.finishedAt.localeCompare(latest) > 0) {
        latest = solve.finishedAt
    }
}

const latestDate = DateTime.fromISO(latest).toISODate()
pb = pb / 1000

export {
    pb,
    latestDate,
}