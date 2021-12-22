const mongoose = require('mongoose') //express모듈을 가져온다
const Schema = mongoose.Schema

//스키마 생성 후 하나하나의 필드작성
const favoriteSchema = mongoose.Schema(
  {
    userFrom: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    movieId: {
      type: String,
    },
    movieTitle: {
      type: String,
    },
    moviePost: {
      type: String,
    },
    movieRunTime: {
      type: String,
    },
  },
  { timestamps: true }
) // 생성된시간이나 그런걸 자동으로 생성을해준다

const Favorite = mongoose.model('Favorite', favoriteSchema)

module.exports = { Favorite } //다른모듈에서 쓸수있게 exports
