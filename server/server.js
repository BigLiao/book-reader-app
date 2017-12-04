const express = require('express')
const path = require('path')
const https = require('https')
const axios = require('axios')

const TARGET_HOST = 'https://m.qidian.com/'
const OPTIONS = {
  Host: 'm.qidian.com',
  Referer: 'https://m.qidian.com/book/3516230/84407520'
}

const app = express()

app.use(express.static(path.resolve(__dirname, '../dist')))

app.get('/bookapi/getChapterInfo', (req, res) => {
  const url = 'https://m.qidian.com/majax/chapter/getChapterInfo'
  repostGet(url, req, res)
})

app.get('/bookapi/category', (req, res) => {
  const url = 'https://m.qidian.com/majax/book/category'
  repostGet(url, req, res)
})

function repostGet (url, oReq, oRes) {
  const query = oReq.query
  const options = {...OPTIONS, params: query}
  console.log(options)
  axios.get(url, options).then(res => {
    oRes.end(JSON.stringify(res.data))
  }).catch(e => {
    console.log(e)
  })
}

app.listen(8888, () => {
  console.log('app listening on port 8888...')
})
