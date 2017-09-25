const router = require('express').Router()
const {Clothing} = require('../db/models')
module.exports = router

// api/imageUpload
router.post('/', async (req, res, next) => {
  try {
    const userId = req.user.id
    let clothingObj = req.body
    clothingObj.userId = userId
    const clothingItem = await Clothing.create(clothingObj)
    return res.json(clothingItem)
  } catch(e) {
    console.error(e)
  }
})