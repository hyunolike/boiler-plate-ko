const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim:true, //스페이스 빈칸을 없애준다
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { //어떤 유저가 관리자, 일반이 될수 있기에 만들어준거야
        type: Number,
        default: 0
    },
    image: String,
    token: {
        token: String  //유효성을 관리 할수 있어
    },
    tokenExp: { //토큰이 사용할수 있는기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema) //스키마를 모델로 감싸주는거야

module.exports = { User }