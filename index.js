const express = require('express') //express모듈을 가져온다
const app = express() //펑션을이용해 앱의 새로운 express를 만든다
const port = 5000

const mongoose = require('mongoose')
mongoose
  .connect(
    'mongodb+srv://admin:1234@cluster0.75koc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {}
  )
  .then(() => console.log('성공'))
  .catch(err => console.log('실패'))

app.get('/', (req, res) => res.send('hello World!~안녕하세요111'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
