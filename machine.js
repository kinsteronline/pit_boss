const noop = () => { }

export const create = (config) => {

  const events = { ...config.events }
  const machine = {}

  let current = config.initial

  const change = (event) => {
    const fromStates = new Set(Array.isArray(event.from) ? event.from : Array.of(event.from))
    const toState = event.to

    const beforeCallback = event.before || noop
    const onCallback = event.on || noop
    const afterCallback = event.after || noop

    return () => {
      if (current === toState) return

      if (fromStates.has(current)) {
        beforeCallback.apply(null, [])
        onCallback.apply(null, [])
        afterCallback.apply(null, [])

        current = toState
      }
    }
  }

  Object.defineProperties(machine, {
    initial: {
      value: config.initial
    },
    current: {
      get: () => current
    },
  })

  const states = new Set([config.initial])

  for (const event in events) {
    states.add(events[event].to)

    Object.defineProperty(machine, event, {
      value: change(events[event]),
      writable: false,
    })
  }

  Object.defineProperty(machine, 'states', {
    value: [...states],
  })

  return machine
}
