Installation:
```
npm i aoktayd/adventofcode-runner
```

```
# Syntax
npx aoc-runner [-v] {[,...year].[,...day].[,...part]} [repeat]

# Usage:
  -v             : enables verboseness i.e. displays warning messages
  args[0]        : the solution to run
                   e.g. ".1,2,3,7.1" runs only part 1 for year 2015
                   through 2018 day 1, 2, 3 & 7
  args[1] repeat : repeats every solution matched N times
```

Before running the solutions you must have an `aoc-runner.config.js` in the root of your CWD.

```javascript
// aoc-runner.config.js example
module.exports = {
    // path: The aoc solution file resolver:
    // Using a string
    path: '$/day$/part$.js',
    // Using a custom resolver object
    path: {
        day: ({ day }) => `day${('' + day).padStart(2, '0')}`,
        part: 'part$.js'
    },
    // ☝ example output: 2018/day01/part1.js

    // input: The input path relative to the resolved solution path:
    input: './input'
}
```