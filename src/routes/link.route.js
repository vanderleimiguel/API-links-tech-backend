const route = require('express').Router()
const controllerLinks = require('../controllers/link.controller')

route.get('/', controllerLinks.findAllLinksController)

route.post('/create', controllerLinks.createLinkController)
route.put('/update/:id', controllerLinks.updateLinkController)
route.delete('/delete/:id', controllerLinks.deleteLinkController)

module.exports = route
