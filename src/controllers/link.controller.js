const linkService = require('../services/link.service')
const mongoose = require('mongoose')

const findAllLinksController = async (req, res) => {
  const allLinks = await linkService.findAllLinksService()
  if (allLinks.length == 0) {
    return res.status(404).send({ message: 'No links found' })
  }
  res.send(allLinks)
}

const createLinkController = async (req, res) => {
  try {
    const link = req.body
    const newLink = await linkService.createLinkService(link)
    res.status(201).send(newLink)
  } catch (err) {
    console.log(err)
    res.send(400).send(err.message)
  }
}

const updateLinkController = async (req, res) => {
  const idParam = req.params.id
  const editLink = req.body
  const updatedLink = await linkService.updateLinkService(idParam, editLink)
  res.send(updatedLink)
}

const deleteLinkController = async (req, res) => {
  const idParam = req.params.id
  await linkService.deleteLinkService(idParam)
  res.send({ message: 'Link deleted sucess!' })
}

module.exports = {
  findAllLinksController,
  createLinkController,
  updateLinkController,
  deleteLinkController
}
