const router = require('express').Router()
const {Clothing} = require('../db/models')
module.exports = router

// api/outfit
router.post('/outfit', async (req, res, next) => {
  try {
    const clothing = await Clothing.findAll({
      where: {
        userId: req.user.id,
        weather: req.body.weather,
        setting: req.body.setting
      }
    })
    const randomNum1 = Math.floor(Math.random() * (clothing.length)) + 1
    const firstPiece = clothing[randomNum1]
    // if(firstPiece.category === 'top') {
      
    // }
    return res.json(firstPiece)
  } catch(e) {
    console.error(e)
  }
})