const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

const data = {
  something: 'price is 500 euros',
  'something else': 'price is 1000 euros'
}

app.get('/prices', (req, res) => {
  const key = req.query.key
  const msg = data[key] || 'no data found'
  console.log('the msg is: ', msg)
  res.json({ msg: msg })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
