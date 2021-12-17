const mongoose = require('express') //express모듈을 가져온다

//스키마 생성 후 하나하나의 필드작성
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50, //최대값
  },
  email: {
    type: String,
    trim: true, //스페이스 공백을 없애주는 역활을함
    unique: 1, //똑같은거 생성 방지
  },
  password: {
    type: String,
    minlength: 5, //최소값
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  //어떤유저가 관리자가 될수도 일반유저가될수도 관리자는 일반유저를 관리할수도있고
  // 넘버가 1이면 관리자고 0일수도있고
  //임의로 지정해주지않으면 룰로 0을 관리자로 줌
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  //토큰을이용해서 유효성검사관리
  token: {
    type: String,
  },
  //토큰의 유효기간을 준다
  tokenExp: {
    type: Number,
  },
})

const User = mongoose.model('User', userSchema)

module.exports = { User }
