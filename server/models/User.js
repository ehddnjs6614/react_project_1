const mongoose = require('mongoose') //express모듈을 가져온다
const bcrypt = require('bcrypt') //bcrypt가져온다
const saltRounds = 10
const jwt = require('jsonwebtoken')

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
//user에 들어가기전에 실행
userSchema.pre('save', function (next) {
  let user = this

  if (user.isModified('password')) {
    //비밀번호를 암호화 시킨다.
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err)

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err)
        //성공하면 hash된 비밀번호로 바꿔준다.
        user.password = hash
        next()
      })
    })
  } else {
    next()
  }
})

userSchema.methods.comparePassword = function (plainPassword, cb) {
  //plainPassword 1234213라면 암호화해서  암호화된 비밀번호랑 같은지 체크
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err)
    cb(null, isMatch)
  })
}
userSchema.methods.generateToken = function (cb) {
  let user = this

  //json웹토큰을 이용해서 토큰을 생성하기
  let token = jwt.sign(user._id.toHexString(), 'secretToken')
  user.token = token
  user.save(function (err, user) {
    if (err) return cb(err)
    cb(null, user)
  })
}

userSchema.statics.findByToken = function (token, cb) {
  let user = this

  //토큰을 decode 한다
  jwt.verify(token, 'secretToken', function (err, decoded) {
    //유저 아이디를 이용해서 유저를 찾은 다음에
    //클라이언트에서 가져온 토큰과 db에 보관된 토큰일 일치하는지 확인

    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return cb(err)
      cb(null, user)
    })
  })
}

const User = mongoose.model('User', userSchema)

module.exports = { User }
