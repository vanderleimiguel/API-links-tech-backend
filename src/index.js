const express = require('express')
const connectDataBase = require('../src/databases/mongo/connection/database')
const linkRoute = require('../src/routes/link.route')

const port = 3000
const app = express()

app.use(express.json())

const request = require('request')
const cheerio = require('cheerio')

request('https://devgo.com.br/', function (err, res, body) {
  if (err) console.log('Erro: ' + err)

  const $ = cheerio.load(body)

  var titles = []
  var links = []
  $('.blog-articles-container').each((i, item) => {
    var title = $(item).find('.blog-article-card-title a').text()
    var link = $(item).find('.blog-article-card-title a href').text()

    titles.push(title)
    links.push(link)

    console.log(titles)
    console.log(links)
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
