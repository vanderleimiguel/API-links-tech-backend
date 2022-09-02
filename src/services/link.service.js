const Link = require('../databases/mongo/schema/link')
const LinkEntity = require('../entities/link.entity')

const findAllLinkService = async () => {
  const allLink = await Link.find()
  return allLink
}

const createLinkService = async link => {
  const newLink = new LinkEntity(link)
  newLink.validate()
  const newLinkValidated = { ...newLink.getLink() }
  const linkCreated = await Link.create(newLinkValidated)

  return linkCreated
}

const updateLinkService = async (id, linkEdited) => {
  const newLinkEdited = new LinkEntity(linkEdited)
  newLinkEdited.validate()
  const newLinkEditedValidated = { ...newLinkEdited.getLink() }
  const updateLink = await Link.findByIdAndUpdate(id, newLinkEditedValidated)
  return updateLink
}

const deleteLinkService = async id => {
  return await Link.findByIdAndDelete(id)
}

module.exports = {
  findAllLinkService,
  createLinkService,
  updateLinkService,
  deleteLinkService
}
