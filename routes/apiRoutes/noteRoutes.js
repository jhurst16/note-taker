const router = require('express').Router();
const notes = require('../../db/db.json');

router.get('/api/notes', (req, res) => {
    let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.post('/api/notes', (req, res) => {
    const saveNewNote = saveNote(req.body, notes);
    res.json(saveNewNote);
});

module.exports = router;
