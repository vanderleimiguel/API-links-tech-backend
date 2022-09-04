const request = require('request')
const cheerio = require('cheerio')

request('https://devgo.com.br/', function (err, res, body) {
  if (err) console.log('Erro: ' + err)

  const $ = cheerio.load(body)

  $('.blog-articles-container').each(function () {
    var title = $(this).find('.blog-article-card h1 a').text().trim()
    // var link = $(this).find('.blog-article-card-title a').text().trim()

    console.log(title)
    // fs.appendFile('imdb.txt', title)
  })
})
