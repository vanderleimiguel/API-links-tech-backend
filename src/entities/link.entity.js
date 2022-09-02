const crypto = require('node:crypto')
class LinkEntity {
  constructor(link) {
    this.id = link.id ?? crypto.randomUUID()
    this.title = link.title
    this.url = link.url
  }

  validate() {
    if (!this.title || !this.url) {
      throw new Error('Invalid title or url')
    }
  }

  getLink() {
    return {
      id: this.id,
      title: this.title,
      url: this.url
    }
  }
}
