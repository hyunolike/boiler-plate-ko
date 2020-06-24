//백엔드의 시작점
const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const {User} = require("./models/User") //데이터베이스 모델을 가져온거야

const config = require('./config/key')


//bodyParser 에 옵션을 주는거야
app.use(bodyParser.urlencoded({extended: true})); //application/x-www-form-unlencoded 분석해서 가져오는거야

app.use(bodyParser.json());//application/json파일을 분석해서 가져올꺼야

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false //이걸 써야 에러가 안떠
}).then(() => console.log('MongoDB 연결 성공!!'))
    .catch(err => console.log(err))






app.get('/', (req, res) => res.send('Hello World! 개발자 현호입니다. nodemon 적용'))

app.post('/register',(req,res) => {
    //회원가입할 때 필요한 정보들을
    //클라이언트에서 가져오면 그것들을 데이터베이스에 넣어준다


    const user = new User(req.body) //json 형식으로 들어있어 bodyParser가 있어서 그런거야

    user.save((err,userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({ //status 200은 성공했다는 의미야
            success: true
        })
    })// user에 저장
})




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))