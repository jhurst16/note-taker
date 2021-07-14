const router = require('express').Router()
const fs = require('fs')
const path = require('path')

router.get('/', (req, res) => {
  const notes = fs.readFileSync(
    path.join(__dirname, '../../db/db.json'),
    'utf8',
  )
  if (notes) {
    const data = JSON.parse(notes)
    res.json(data)
  } else {
    res.json([])
  }
})

router.post('/', (req, res) => {
  const id = new Date().getTime().toString()
  const notes = fs.readFileSync(
    path.join(__dirname, '../../db/db.json'),
    'utf8',
  )
  let data
  if (notes) {
    data = JSON.parse(notes)
  } else {
    data = []
  }
  const newData = JSON.stringify(data.concat({...req.body, id}), null, 2)
  fs.writeFileSync(path.join(__dirname, '../../db/db.json'), newData)
  res.json(newData)
})

router.delete('/:id', (req, res) => {
  const notes = fs.readFileSync(
    path.join(__dirname, '../../db/db.json'),
    'utf8',
  )
  let data
  if (notes) {
    data = JSON.parse(notes)
  } else {
    data = []
  }
  console.log(req.params.id)
  const filteredResults = JSON.stringify(data.filter(note => note.id !== req.params.id), null, 2);
  fs.writeFileSync(path.join(__dirname, '../../db/db.json'), filteredResults)
  res.json(filteredResults)
})

module.exports = router
