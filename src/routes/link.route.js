const route = require('express').Router()
const controllerLinks = require('../controllers/link.controller')
const { validId } = require('../midllewares/link.midlleware')

route.get('/', controllerLinks.findAllLinksController)
route.post('/create', controllerLinks.createLinkController)
route.put('/update/:id', validId, controllerLinks.updateLinkController)
route.delete('/delete/:id', validId, controllerLinks.deleteLinkController)

module.exports = route
