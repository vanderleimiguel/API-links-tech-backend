const { Schema, model } = require('mongoose')

const LinkSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true }
})

const Link = model('link', LinkSchema)

module.exports = Link
