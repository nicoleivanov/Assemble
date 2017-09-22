const router = require('express').Router()
const {Clothing} = require('../db/models')
module.exports = router

// api/clothing/
router.get('/', async (req, res, next) => {
  try {
    const clothing = await Clothing.findAll()
    return res.json(clothing)
  } catch(e) {
    console.error(e)
  }
})