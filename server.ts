import { type Serve } from 'bun'
import { resolve } from 'path'
import { getRandomValues, randomUUID } from 'crypto'

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
  return Math.floor(value / 2**8 * 6 + 1)
}

async function app({ url, method }: Request): Response {
  const { pathname } = new URL(url)

  console.log(`${method}: ${pathname}`)

  // return new Response(pathname)

  if (pathname === '/index.css') {
    return new Response(Bun.file(resolve(import.meta.dir, './index.css')))
  }

  if (pathname === '/' || pathname === '/index.html') {
    return new Response(Bun.file(resolve(import.meta.dir, './index.html')))
  }

  return new Response('Crapped Out!!', { status: 404, statusText: 'crappedout' })

  // return Response.json({
  //   icon: `[${die()}][${die()}]`,
  //   name: 'PitBoss: Craps',
  //   uuid: randomUUID(),
  // })
}

export default {
  port: 2312,
  fetch: app,
} satisfies Serve

