import { create } from './machine'

const ConsoleLog = (element) => {

  const hidden = 'hidden'
  const visible = 'visible'

  const toggleElement = () => element.classList.toggle(hidden)
  const entriesElement = element.querySelector('.entries')

  const config = {
    initial: visible,
    events: {
      hide: {
        from: visible,
        to: hidden,
        on: toggleElement,
      },
      show: {
        from: hidden,
        to: visible,
        on: toggleElement,
      },
    }
  }

  const fsm = create(config)
  element.addEventListener('click', fsm.hide)

  const log = (msg) => {
    const entry = document.createElement('div')
    const content = document.createTextNode(msg)

    entry.appendChild(content)
    entriesElement.appendChild(entry)
  }

  // You know what to do
  const err = (msg) => {
    const entry = document.createElement('div')
    entry.classList.add('negative')
    const content = document.createTextNode(msg)

    entry.appendChild(content)
    entriesElement.appendChild(entry)
  }

  const toggle = () => {
    fsm.current === hidden ? fsm.show() : fsm.hide()
  }

  return {
    toggle,
    log,
    err,
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  const loggingElement = document.getElementById('logger')
  const logging = ConsoleLog(loggingElement)

  logging.log(`Welcome to PitBoss v0.4.293862`)
  logging.log('Connecting to server...')
  logging.err('Oh shit, connection REFUSED!')
  logging.log("Let's try that again...")

  const container = document.querySelector('.container')
  container.addEventListener('keyup', (event) => {
    if (event.code === 'Backquote') {
      logging.toggle()

    }
  })
})


window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
})

  ; (function() {
    console.log('welcome degenerate gambler, running the js')
  }());

