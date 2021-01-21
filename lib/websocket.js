
class Websocket {
  constructor({
    socket,
    connectionId,
    id = 0,
    action = 'default'
  }) {
    Object.assign(this, {
      socket,
      connectionId,
      id,
      action
    })
    this.statusCode = 200
  }

  // Set statusCode //
  status (code) {
    this.statusCode = code
    return this
  }

  // Set action //
  setAction (action) {
    this.action = action
    return this
  }

  // Send message / response body //
  async send (body) {
    await this.socket.post(this.connectionId, {
      action: this.action,
      response: {
        statusCode: this.statusCode,
        body
      },
      id: this.id
    })
  }
}

module.exports = Websocket