// Create a new error. Errors are pushed into an array so they can be
// queued. We're doing a bit of timestamp trickery here so each error
// is shown for exactly one second before being dropped. Probably
// useful for real world scenarios; especially when coupled to
// fancy CSS animation thingies

// Each error is displayed 1 second
const ERROR_TIMEOUT = 1000

module.exports = {
  namespace: 'app',
  state: {

  },
  reducers: {

  },
  effects: {

  }
}
