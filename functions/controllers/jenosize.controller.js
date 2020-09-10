const solve24 = require('../utils/game24')
const fetch = require("node-fetch")

const game24 = (req, res) => {
  const result = solve24(req.body.numbers)
  res.send({
    result,
  })
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