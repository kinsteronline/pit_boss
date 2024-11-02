import { Hono } from 'hono'
import { getRandomValues, randomUUID } from 'crypto'

const { floor } = Math

function die(): number {
  //
  // Learn: implications of 8 v 32: It's "more" randomness with 32
  const value = getRandomValues(new Uint8Array(1))[0]
  //
  // the value is the first random value of the array
  // divided by 2 ^ size of the unsigned int (8 or 32 perhaps)
  // multiplied by the "max" random number so it's 0 ... n - 1
  // and then add 1 so that you're not returning a zero based
  // number
  return floor(value / 2 ** 8 * 6 + 1)
}
const app = new Hono()
app.get('/', (c) => {
  return c.json({
    gamblerId: randomUUID(),
    chips: 1_000_000,
    dice: `[${die()}][${die()}]`,
  })
})

export default {
  port: 2312,
  fetch: app.fetch
}
