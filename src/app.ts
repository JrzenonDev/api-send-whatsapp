import { create, Whatsapp, Message, SocketState } from 'venom-bot'

class Sender {
  private client: Whatsapp

  constructor() {

  }

  private initialize() {
    const qrcode = () => {

    }
    const status = () => {

    }
    const start = (client: Whatsapp) => {

    }

    create('ws-sender-dev', qrcode, status)
      .then((client) => start(client))
      .catch((error) => console.error(error))
  }
}

