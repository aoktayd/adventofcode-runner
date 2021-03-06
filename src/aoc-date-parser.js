const {
    AOC_STARTING_YEAR,
} = require('./constants')

const currentAocYear = () => {
    const now = new Date();
    const DECEMBER = 11;
    if (now.getMonth() >= DECEMBER) {
        return now.getFullYear();
    } else {
        return now.getFullYear() - 1;   
    }
}

module.exports = date => {
    const toRun = new Map([['year', []],['day', []],['part', []]])

    if (!date) {
        return toRun
    }

    toRun.set('date', date.split('.'))

    const [year, day, part] = date.split('.')
    const input = [
        ['year', year, AOC_STARTING_YEAR, currentAocYear()],
        ['day', day, 1, 25],
        ['part', part, 1, 2]
    ]

    for (const [name, part, min, max] of input) {
        const toRunValues = []
        toRun.set(name, toRunValues)

        if (!part) {
            for (let i = min; i <= max; i++) {
                toRunValues.push(i)
            }
        } else {
            part
                .replace(/\,[\s]*$/, '')
                .split(',')
                .forEach(value => {
                    if (value.includes('-')) {
                        let [minValue, maxValue] = value.split('-')
                        maxValue = Math.min(Math.max(maxValue, min), max)
                        minValue = Math.min(Math.max(minValue, min), maxValue)
                        for (let i = minValue; i <= maxValue; i++) {
                            toRunValues.push(i)
                        }
                    } else {
                        toRunValues.push(parseInt(value, 10))
                    }
                })
        }
    }

    return toRun
}
