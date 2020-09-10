const solve24 = require('../utils/game24')
const fetch = require("node-fetch")

const game24 = (req, res) => {
  const numbers = req.body.numbers
  const someIsZeroOrMoreThanTen = numbers.some(number => number < 1 || number > 9)
  const mergeNumbers = numbers.reduce((sum, number) => {
    return `${sum}${number}`
  }, '')
  if (numbers.length !== 4) {
    res.status(400).send({
      message: 'กรุณาใส่ตัวเลขจำนวน 4 ตัวเลขเท่านั้น'
    })
  }
  else if (someIsZeroOrMoreThanTen) {
    res.status(400).send({
      message: 'กรุณาใส่ตัวเลข 0-9 เท่านั้น'
    })
  }
  else {
    const result = solve24(mergeNumbers) ? 'YES' : 'NO'
    res.send({
      result,
    })
  }
}

const searchPlace = (req, res) => {
  const text = encodeURI(req.body.text)
  fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${text}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDHuA9bJQNzMqpIUxfsqC5a-NjCYWhYX5w`).then(res => res.json())
  .then(json => {
    res.send(json)
  })
}

module.exports = {
  game24,
  searchPlace,
}