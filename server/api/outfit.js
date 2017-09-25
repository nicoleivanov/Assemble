const router = require('express').Router()
const {Clothing} = require('../db/models')
module.exports = router

// api/outfit
router.post('/', async (req, res, next) => {
  try {
    let clothing = await Clothing.findAll({
      where: {
        userId: req.user.id,
        weather: { $contains: [req.body.weather]},
        setting: { $contains: [req.body.setting]}
      }
    })
    let randomNum = Math.floor(Math.random() * (clothing.length))
    const firstPiece = clothing[randomNum]
    console.log('firstPiece', firstPiece.dataValues)
    const outfit = {
      pieces: []
    }
    if(!firstPiece) {
      return res.json("Outfit not found")
    }
    if(firstPiece.category === 'full body') {
      outfit.pieces.push(firstPiece)
      return res.json(firstPiece)
    } else {
      outfit.pieces.push(firstPiece)
    }
    if(firstPiece.category === 'top') {
      clothing = await Clothing.findAll({
        where: {
          userId: req.user.id,
          category: 'bottom',
          weather: { $contains: [req.body.weather]},
          setting: { $contains: [req.body.setting]}
        }
      })
      randomNum = Math.floor(Math.random() * (clothing.length))
      let bottom = clothing[randomNum]
      if(!bottom) {
        return res.json("Outfit not found")
      }
      outfit.pieces.push(bottom)
    } else {
      clothing = await Clothing.findAll({
        where: {
          userId: req.user.id,
          category: 'top',
          weather: { $contains: [req.body.weather]},
          setting: { $contains: [req.body.setting]}
        }
      })
      randomNum = Math.floor(Math.random() * (clothing.length))
      let top = clothing[randomNum]
      if(!top) {
        return res.json("Outfit not found")
      }
      outfit.pieces.unshift()
    }
    return res.json(outfit)
  } catch(e) {
    console.error(e)
  }
    
})